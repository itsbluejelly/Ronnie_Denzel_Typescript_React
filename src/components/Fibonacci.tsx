// IMPORTING VARIOUS FILES
    // IMPORTING VARIOUS TYPES
import {FibonacciProps} from "../types/Props"
    // IMPORTING MODULES
import React from "react"

// DECLARING A FUNCTION THAT RETURNS A FIBONACCI COMPONENT
export default function Fibonacci({children, formData, handleFormData, inputRef}: FibonacciProps){
    return (
        <div>
            <input 
                type="number" 
                name="index"
                value={formData.index}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormData(e)}
                min={0}
                required = {true}
                placeholder="enter index here"
                ref={inputRef}
            />

            <button onClick={() => inputRef.current?.focus()}>Focus</button>
            <p>{children}</p>
        </div>
    )
}