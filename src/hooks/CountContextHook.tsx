// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import React from "react";
    // IMPORTING CONTEXT
import {CountContext} from "../contexts/CountContext"
    // IMPORTING TYPES
import {CountContextType} from "../types/Types"

// DECLARING A HOOK TO VALIDATE THE COUNTCONTEXT
export default function CountContextHook(): CountContextType{
    // OBTAINING THE CONTEXT VALUE
    const context = React.useContext(CountContext)

    // VALIDATING THE PRESENCE OF THE CONTEXT BEFORE RETURNING IT
    if(!context){
        throw new Error("The context you are looking for is not available via CountContext")
    }

    return context
}