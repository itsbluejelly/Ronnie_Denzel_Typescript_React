// IMPORTING NECESSARY FILES
    // IMPORTING  MODULES
import React from "react";
    // IMPORTING TYPES
import {FormDataContextType, FormDataContextReducerStateType, FormDataContextReducerActionType} from "../types/Types"
    // IMPORTING PROPS
import {FormDataContextProviderProps} from "../types/Props"

// CREATING A FORMDATA CONTEXT FOR THE APPLICATION
export const FormDataContext = React.createContext<FormDataContextType | null>(null)
// AN INITIAL STATE FOR THE FORMDATACONTEXTREDUCER
const initialState: FormDataContextReducerStateType = { formData: { input: '' }}

// CREATING A FORMDATACONTEXT REDUCER TO HANDLE MULTIPLE STATES OF THE CONTEXT
export function FormDataContextReducer(state: FormDataContextReducerStateType, action: FormDataContextReducerActionType): FormDataContextReducerStateType{
    switch(action.type){
        case "UPDATE_INPUT":
            return { formData: {...state.formData, ...action.payload}}
        default:
            return state
    }
}

// DECLARING A FORMDATACONTEXT PROVIDER FOR THE CONTEXT
export default function FormDataContextProvider(props: FormDataContextProviderProps){
    // DESTRUCTURING THE STATE AND DISPATCH FUNCTION FROM THE REDUCER
    const [state, dispatch] = React.useReducer(FormDataContextReducer, initialState)

    return(
        <FormDataContext.Provider value={{...state, dispatch}}>
            {props.children}
        </FormDataContext.Provider>
    )
}