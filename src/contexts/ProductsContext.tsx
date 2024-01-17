// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import React from "react";
    // IMPORTING TYPES
import {ProductsContextType, ProductsContextReducerStateType, ProductsContextReducerActionType, ProductType} from "../types/Types"
    // IMPORTING ENUMS
import {PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE} from "../types/Enums"
    // IMPORTING PROPS
import {ProductsContextProviderProps} from "../types/Props"

// CREATING A PRODUCTSCONTEXT FOR THE APPLICATION
export const ProductsContext = React.createContext<ProductsContextType | null>(null)
// CREATING AN INITIALSTATE FOR THE REDUCER
const initialState: ProductsContextReducerStateType = { products: [] }

// CREATING A PRODUCTSCONTEXT REDUCER TO HANDLE VARIOUS STATES OF CONTEXT
export function ProductsContextReducer(state: ProductsContextReducerStateType, action: ProductsContextReducerActionType): ProductsContextReducerStateType{
    switch(action.type){
        case PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE.ADD_PRODUCT:{
            const {name, sku, price} = action.payload
            const foundProduct: ProductType | undefined = state.products.find(product => product.sku === sku)

            if(foundProduct){
                throw new Error(`The product of sku ${foundProduct.sku} already exists`)
            }

            return {...state, products: [...state.products, {name, sku, price}]}
        }
        case PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE.CREATE_PRODUCTS:
            return {...state, products: action.payload}
        case PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE.DELETE_ALL_PRODUCTS:
            return { ...state, products: [] }
        case PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE.DELETE_PRODUCT:{
            const {sku} = action.payload
            const foundProduct: ProductType | undefined = state.products.find(product => product.sku === sku)
            const filteredProducts: ProductType[] = state.products.filter(product => product.sku !== sku)

            if(!foundProduct){
                throw new Error(`The product of sku ${sku} does not exist`)
            }

            return {...state, products: filteredProducts}
        }case PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE.UPDATE_ALL_PRODUCTS:
            return { ...state, products: state.products.map(product => ({...product, ...action.payload})) }
        case PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE.UPDATE_PRODUCT:{
            const {sku} = action.payload
            const foundProduct: ProductType | undefined = state.products.find(product => product.sku === sku)
            const updatedProducts: ProductType[] = state.products.map(product => product.sku === sku ? {...product, ...action.payload} : product)

            if(!foundProduct){
                throw new Error(`The product of sku ${sku} does not exist`)
            }

            return {...state, products: updatedProducts}
        }default:
            return state
    }
}

// CREATING A PRODUCTSCONTEXT PROVIDER TO SUPPLY THE CONTEXT
export default function ProductsContextProvider(props: ProductsContextProviderProps){
    // OBTAINING THE STATE AND DISPATCH FUNCTIONS FROM THE USEREDUCER
    const [state, dispatch] = React.useReducer(ProductsContextReducer, initialState)

    return(
        <ProductsContext.Provider value={{...state, dispatch}}>
            {props.children}
        </ProductsContext.Provider>
    )
}