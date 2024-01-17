// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import React from "react"
    // IMPORTING CONTEXTS
import {CartContext} from "../contexts/CartContext"
    // IMPORTING TYPES
import {CartContextType} from "../types/Types"

// DECLARING A HOOK THAT VALIDATES THE CART CONTEXT
export default function CartContextHook(): CartContextType{
    // OBTAINING THE CONTEXT VALUE USING USECONTEXT
    const context = React.useContext(CartContext)

    if(!context){
        throw new Error("The context you are looking for is not available via CartContext")
    }

    return context
}