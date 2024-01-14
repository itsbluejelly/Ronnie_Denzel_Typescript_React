// IMPORTING NECESSARY FILES
    // IMPORTING PROPS
import {InputHolderProps} from "../types/Props"
    // IMPORTING MODULES
import React from "react"

// DECLARING A FUNCTION THAT RETURNS AN INPUTHOLDER COMPONENT
export default function InputHolder({children, formData, handleFormData}: InputHolderProps){
    return(
        <div>
            <input 
                type="text" 
                name="input" 
                placeholder="Your input here"
                required={true}
                value={formData.input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormData(e)}
            />

            <p>{children}</p>
        </div>
    )
}