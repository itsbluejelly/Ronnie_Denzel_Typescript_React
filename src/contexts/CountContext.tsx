// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import React from "react";
    // IMPORTING TYPES
import {CountContextType, CountContextReducerActionType, CountContextReducerStateType} from "../types/Types"
    // IMPORTING ENUMS
import {COUNT_CONTEXT_REDUCER_ACTION_TYPE} from "../types/Enums"
    // IMPORTING PROPS
import {CounterContextProviderProps} from "../types/Props"

// CREATING A COUNTCONTEXT FOR THE APPLICATION
export const CountContext = React.createContext<CountContextType | null>(null)
// AN INITIAL VALUE FOR STATE IN COUNTCONTEXTREDUCER
const initialState: CountContextReducerStateType = { count: 0 }

// CREATING A COUNTCONTEXTREDUCER TO HANDLE THE DIFFERENT STATES OF THE CONTEXT
export function CountContextReducer(state: CountContextReducerStateType, action: CountContextReducerActionType): CountContextReducerStateType{
    switch(action.type){
        case COUNT_CONTEXT_REDUCER_ACTION_TYPE.INCREASE_COUNT:
            return {...state, count: state.count + 1}
        case COUNT_CONTEXT_REDUCER_ACTION_TYPE.DECREASE_COUNT:
            return {...state, count: state.count - 1}
        default:
            return state
    }
}

// EXPORTING A COUNTCONTEXTPROVIDER FOR THE CONTEXT
export default function CountContextProvider(props: CounterContextProviderProps){
    // DESTRUCTURING THE STATE AND DISPATCH FROM THE REDUCER AND INITIALSTATE
    const [state, dispatch] = React.useReducer(CountContextReducer, initialState)

    return(
        <CountContext.Provider value={{...state, dispatch}}>
            {props.children}
        </CountContext.Provider>
    )
}