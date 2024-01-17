// IMPORTING NECESSARY FILES
    // IMPORTING ENUMS
import {PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE, CART_CONTEXT_REDUCER_ACTION_TYPE} from "./Enums"
    // IMPORTING MODULES
import {Dispatch} from "react"
    // IMPORTING GENERICS
import {ObjectEmitter, ObjectFilterer, OptionalObject, Prettier, ActionTypeDeterminer} from "./Generics"

// A TYPE FOR THE PRODUCT
export type ProductType = {
    sku: string,
    name: string,
    price: number
}
        
// A TYPE FOR THE PRODUCTSCONTEXTREDUCER STATE
export type ProductsContextReducerStateType = { products: ProductType[] }

// A TYPE FOR THE PRODUCTSCONTEXTREDUCER ACTION
export type ProductsContextReducerActionType = ActionTypeDeterminer<{
    [PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE.ADD_PRODUCT]: ProductType,
    [PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE.CREATE_PRODUCTS]: ProductType[],
    [PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE.DELETE_ALL_PRODUCTS]: never,
    [PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE.DELETE_PRODUCT]: ObjectFilterer<ProductType, "sku">,
    [PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE.UPDATE_ALL_PRODUCTS]: OptionalObject<ObjectEmitter<ProductType, "sku">>,
    [PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE.UPDATE_PRODUCT]: ObjectEmitter<ProductType, "name"> | ObjectEmitter<ProductType, "price">
}>

// A TYPE FOR THE PRODUCTS CONTEXT
export type ProductsContextType = { 
    products: ProductType[],
    dispatch: Dispatch<ProductsContextReducerActionType> 
}

// A TYPE FOR THE CART
export type CartType = Prettier<ProductType & { quantity: number }>
// A TYPE FOR THE CARTCONTEXTREDUCER STATE
export type CartContextReducerStateType = { cart: CartType[] }

// A TYPE FOR THE CARTCONTEXTREDUCER ACTION
export type CartContextReducerActionType = ActionTypeDeterminer<{
    [CART_CONTEXT_REDUCER_ACTION_TYPE.ADD_EVERY_QUANTITY_TO_CART]: ObjectFilterer<CartType, "quantity">
    [CART_CONTEXT_REDUCER_ACTION_TYPE.ADD_QUANTITY_TO_CART]: ObjectEmitter<CartType, "name" | "price">,
    [CART_CONTEXT_REDUCER_ACTION_TYPE.ADD_TO_CART]: CartType,
    [CART_CONTEXT_REDUCER_ACTION_TYPE.EMPTY_CART]: never,
    [CART_CONTEXT_REDUCER_ACTION_TYPE.REMOVE_FROM_CART]: ObjectFilterer<CartType, "sku">,
}>

// A TYPE FOR THE CART CONTEXT
export type CartContextType = {
    cart: CartType[],
    dispatch: Dispatch<CartContextReducerActionType>,
    totalQuantity: number,
    totalPrice: string
}