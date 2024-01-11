// IMPORTING NECESSARY PROPS
import {InputBoxProps} from "../types/props"

// DECLARING A FUNCTION THAT RETURNS AN INPUTBOXPROPS COMPONENT
export default function InputBox({children, formData, handleFormData}: InputBoxProps){
    return(
        <div>
            <input 
                type="text" 
                name="name"
                placeholder="Enter text here"
                onChange={(e) => handleFormData(e)}
                value={formData.name}
            />
            
            <p>{children}</p>
        </div>
    )
}