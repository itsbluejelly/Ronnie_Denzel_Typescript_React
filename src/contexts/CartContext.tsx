// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import React from "react";
    // IMPORTING TYPES
import {CartType, CartContextReducerStateType, CartContextReducerActionType, CartContextType} from "../types/Types"
    // IMPORTING ENUMS
import {CART_CONTEXT_REDUCER_ACTION_TYPE} from "../types/Enums";
    // IMPORTING PROPS
import {CartContextProviderProps} from "../types/Props"

// CREATING A CARTCONTEXT FOR THE APPLICATION
export const CartContext = React.createContext<CartContextType | null>(null)
// CREATING AN INITIALSTATE FOR THE REDUCER
const initialState: CartContextReducerStateType = { cart: [] }

// CREATING A CARTCONTEXT REDUCER TO HANDLE VARIOUS STATES OF CONTEXT
export function CartContextReducer(state: CartContextReducerStateType, action: CartContextReducerActionType): CartContextReducerStateType{
    switch(action.type){
        case CART_CONTEXT_REDUCER_ACTION_TYPE.ADD_EVERY_QUANTITY_TO_CART:
            return {...state, cart: state.cart.map(cartItem => ({...cartItem, ...action.payload}))}
        case CART_CONTEXT_REDUCER_ACTION_TYPE.ADD_QUANTITY_TO_CART:{
            const {sku} = action.payload
            const updatedCartItems: CartType[] = state.cart.map(cartItem => cartItem.sku === sku ? {...cartItem, ...action.payload} : cartItem)
            const foundCartItem: CartType | undefined = state.cart.find(cartItem => cartItem.sku === sku)

            if(!foundCartItem){
                throw new Error(`The cart item of sku ${sku} does not exist`)
            }

            return {...state, cart: updatedCartItems}
        }case CART_CONTEXT_REDUCER_ACTION_TYPE.ADD_TO_CART: {
            const {sku, name, quantity, price} = action.payload
            const foundCartItem: CartType | undefined = state.cart.find(cartItem => cartItem.sku === sku)
            const filteredCartItems: CartType[] = state.cart.filter(cartItem => cartItem.sku !== sku)

            if(foundCartItem){
                return {...state, cart: [...filteredCartItems, {...foundCartItem, quantity: foundCartItem.quantity + 1}]}
            }
                
            return {...state, cart: [...state.cart, {sku, name, quantity, price}]}
        }case CART_CONTEXT_REDUCER_ACTION_TYPE.EMPTY_CART:
            return {...state, cart: []}
        case CART_CONTEXT_REDUCER_ACTION_TYPE.REMOVE_FROM_CART: {
            const {sku} = action.payload
            const foundCartItem: CartType | undefined = state.cart.find(cartItem => cartItem.sku === sku)
            const filteredCartItems: CartType[] = state.cart.filter(cartItem => cartItem.sku !== sku)

            if(!foundCartItem){
                throw new Error(`The cart item of sku ${sku} does not exist`)
            }

            return {...state, cart: filteredCartItems}
        }
        default:
            return state
    }
}

// CREATING A CARTCONTEXT PROVIDER TO SUPPLY THE CONTEXT
export default function CartContextProvider(props: CartContextProviderProps){
    // OBTAINING THE STATE AND DISPATCH FUNCTIONS FROM THE USEREDUCER
    const [state, dispatch] = React.useReducer(CartContextReducer, initialState)

    // FINDING THE TOTAL QUANTITY OF ITEMS IN CART
    const totalQuantity: number = state.cart.reduce((previousValue, currentItem) => previousValue + currentItem.quantity, 0)
    
    // FINDING THE TOTAL PRICE OF ITEMS IN THE CART
    const totalPrice: string = new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES"
    }).format(
        state.cart.reduce((previousValue, currentItem) => previousValue + (currentItem.quantity * currentItem.price), 0)
    )

    // SORTING OUT THE CART ITEMS
    const sortedCartArray: CartType[] = state.cart.sort((a, b) => {
        const firstName = a.sku.trim().toLowerCase()
        const lastName = b.sku.trim().toLowerCase()

        if(firstName > lastName){
            return 1
        }else if(firstName < lastName){
            return -1
        }else{
            return 0
        }
    })

    return(
        <CartContext.Provider value={{...state, dispatch, totalPrice, totalQuantity, cart: sortedCartArray}}>
            {props.children}
        </CartContext.Provider>
    )
}