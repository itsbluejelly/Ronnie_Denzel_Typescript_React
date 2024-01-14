// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import React from "react";
    // IMPORTING CONTEXTS
import {FormDataContext} from '../contexts/FormDataContext'
    // IMPORTING TYPES
import {FormDataContextType} from "../types/Types"

// DECLARING A HOOK TO VALIDATE THE CONTEXT
export default function FormDataContextHook(): FormDataContextType{
    // OBTAINING THE CONTEXT
    const context = React.useContext(FormDataContext)

    // VALIDATING THE PRESENCE OF THE CONTEXT BEFORE RETURNING IT
    if(!context){
        throw new Error("The context you are looking for is not available via FormDataContext")
    }

    return context
}