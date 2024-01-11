// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import {ReactNode, ChangeEvent} from 'react'
    // IMPORTING TYPES
import {AppState} from './types'

// DECLARING PROPS FOR COUNTER COMPONENT
export type CounterProps = { 
    children: ReactNode,
    increaseCount: () => void,
    decreaseCount: () => void,
}

// DECLARING PROPS FOR IPUTBOX PROPS
export type InputBoxProps = {
    formData: AppState["formData"],
    handleFormData: (e: ChangeEvent<HTMLInputElement>) => void,
    children: ReactNode
}