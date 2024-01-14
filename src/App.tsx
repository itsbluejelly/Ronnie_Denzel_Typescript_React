// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import React from "react"
    // IMPORTING COMPONENTS
import Counter from "./components/Counter"
import InputHolder from "./components/InputHolder"
import CountContextHook from "./hooks/CountContextHook"
import FormDataContextHook from "./hooks/FormDataContextHook"

// DECLARING A FUNCTION THAT RETURNS AN APP COMPONENT
export default function App(){
    // OBTAINING THE VALIDATED COUNTCONTEXT FROM THE COUNTCONTEXTHOOK
    const {count, dispatch} = CountContextHook()
    // OBTAINING THE VALIDATED FORMDATACONTEXT FROM THE FORMDATACONTEXTHOOK
    const {formData, dispatch: FormDataDispatch} = FormDataContextHook()

    // A FUNCTION TO HANDLE THE FORMDATA
    function handleFormData(e: React.ChangeEvent<HTMLInputElement>): void{
        const {value} = e.target

        FormDataDispatch({
            type: "UPDATE_INPUT",
            payload: { input: value }
        })
    }

    return(
        <div>
            <Counter handleCount={dispatch}>Count is: {count}</Counter>
            
            <InputHolder
                formData={formData}
                handleFormData={handleFormData}
            >{formData.input}</InputHolder>
        </div>
    )
}