// IMPORTING NECESSARY FILES
    // IMPORTING ENUMS
import {COUNT_CONTEXT_REDUCER_ACTION_TYPE} from "./Enums"
    // IMPORTING MODULES
import {Dispatch} from 'react'

// A TYPE FOR THE COUNTCONTEXTREDUCER ACTION
export type CountContextReducerActionType = { type: COUNT_CONTEXT_REDUCER_ACTION_TYPE }
// A TYPE FOR THE COUNTCONTEXTREDUCER STATE
export type CountContextReducerStateType = { count: number }

// A TYPE FOR THE COUNT CONTEXT
export type CountContextType = { 
    count: number,
    dispatch: Dispatch<CountContextReducerActionType>
}

// A TYPE FOR THE FORMDATACONTEXTREDUCER ACTION
export type FormDataContextReducerActionType = { 
    type: "UPDATE_INPUT",
    payload: { input: string } 
}

// A TYPE FOR THE FORMDATACONTEXTREDUCER STATE
export type FormDataContextReducerStateType = { formData: { input: string }}

// A TYPE FOR THE FORMDATA CONTEXT
export type FormDataContextType = { 
    formData: { input: string },
    dispatch: Dispatch<FormDataContextReducerActionType>
}