// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import React from "react"
    // IMPORTING CONTEXTS
import {ProductsContext} from "../contexts/ProductsContext"
    // IMPORTING TYPES
import {ProductsContextType} from "../types/Types"

// DECLARING A HOOK THAT VALIDATES THE PRODUCTS CONTEXT
export default function ProductsContextHook(): ProductsContextType{
    // OBTAINING THE CONTEXT VALUE USING USECONTEXT
    const context = React.useContext(ProductsContext)

    if(!context){
        throw new Error("The context you are looking for is not available via ProductsContext")
    }

    return context
}