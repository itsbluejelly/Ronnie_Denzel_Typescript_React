// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import {ReactNode} from "react"
    // IMPORTING GENERICS
import {Prettier, ObjectEmitter, ObjectFilterer} from "./Generics"
    // IMPORTING TYPES
import {ProductType, CartContextReducerActionType, CartContextType, CartType} from "./Types"

// DECLARING A PROP FOR THE PRODUCTSCONTEXTPROVIDER COMPONENT
export type ProductsContextProviderProps = { children: ReactNode }
// DECLARING A PROP FOR THE CARTCONTEXTPROVIDER COMPONENT
export type CartContextProviderProps = ProductsContextProviderProps

// DECLARING A PROP FOR THE NAVBAR COMPONENT
export type NavbarProps = {
    viewCart: boolean;
    handleViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}

// DECLARING A PROP FOR THE HEADER COMPONENT
export type HeaderProps = Prettier<NavbarProps & { 
    totalPrice: string,
    totalQuantity: number
}>

// DECLARING A PROP FOR THE FOOTER COMPONENT
export type FooterProps = ObjectEmitter<HeaderProps, "handleViewCart">

// DECLARING A PROP FOR THE PRODUCT COMPONENT
export type ProductProps = {
    product: ProductType,
    handleProduct: React.Dispatch<CartContextReducerActionType>,
    inCart: boolean,
    handleIsCleared: React.Dispatch<React.SetStateAction<boolean>>
}

// DECLARING A PROP FOR THE CART COMPONENT
export type CartProps = Prettier<ObjectEmitter<CartContextType, "cart"> & { 
    isCleared: boolean,
    children: JSX.Element[],
    handleIsCleared: React.Dispatch<React.SetStateAction<boolean>>
}>

// DECLARING A PROP FOR THE CARTLINEITEM COMPONENT
export type CartLineItemProps = Prettier<ObjectFilterer<CartContextType, "dispatch"> & { item: CartType }>