// IMPORTING VARIOUS TYPES
import {ReactNode} from "react"
import {AppFormData} from "./Types"

// A TYPE FOR THE COUNTERPROPS
export type CounterProps = {
    children: ReactNode,
    addCount: () => void,
    subtractCount: () => void,
}

// A TYPE FOR THE FIBONACCIPROPS
export type FibonacciProps = {
    children: ReactNode,
    formData: AppFormData,
    handleFormData: (e: React.ChangeEvent<HTMLInputElement>) => void
    inputRef: React.MutableRefObject<HTMLInputElement | null>
}