// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import {ReactNode, Dispatch, ChangeEvent} from "react"
    // IMPORTING TYPES
import {CountContextReducerActionType} from './Types'

// DEFINING PROPS FOR THE COUNTER COMPONENT
export type CounterProps = {
    children: ReactNode,
    handleCount: Dispatch<CountContextReducerActionType>
}

// DEFINING PROPS FOR THE COUNTERCONTEXTPROVIDER COMPONENT
export type CounterContextProviderProps = { children: ReactNode }

// DEFINING PROPS FOR THE INPUTHOLDER COMPONENT
export type InputHolderProps = {
    children: ReactNode,
    formData: { input: string },
    handleFormData: (e: ChangeEvent<HTMLInputElement>) => void
}

// DEFINING PROPS FOR THE FORMDATACONTEXTPROVIDER COMPONENT
export type FormDataContextProviderProps = { children: ReactNode }
