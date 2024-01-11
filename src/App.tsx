// IMPORTING NECESSARY FILES
    // IMPORTING TYPES
import {AppState} from "./types/types"
import {AppStateReducerAction} from "./types/types"
    // IMPORTING ENUMS
import {APP_STATE_REDUCER_ACTION_TYPE} from "./types/enums"
    // IMPORTING MODULES
import React from "react"
    // IMPORTING COMPONENTS
import Counter from "./components/Counter"
import InputBox from "./components/InputBox"

// DECLARING AN INITIAL STATE FOR THE APP STATE
const initialAppState: AppState = {
    count: 0,
    formData: { name: '' }
}

// DECLARING A REDUCER FUNCTION FOR THE APPSTATE
function AppStateReducer(state: AppState, action: AppStateReducerAction): AppState{
    switch(action.type){
        case APP_STATE_REDUCER_ACTION_TYPE.INCREASE_COUNT:
            return {...state, count: state.count + 1}
        case APP_STATE_REDUCER_ACTION_TYPE.DECREASE_COUNT:
            return {...state, count: state.count - 1}
        case APP_STATE_REDUCER_ACTION_TYPE.UPDATE_NAME:
            if(action.payLoad){
                const {formData} = action.payLoad
                return {...state, formData}
            }else{
                throw new Error("A payload property is required for you to update the name")
            }
        default:
            return state
    }
}

// DECLARING A FUNCTION THAT RETURNS AN APP COMPONENT
export default function App(){
    const [{count, formData}, dispatch] = React.useReducer(AppStateReducer, initialAppState)

    // DECLARING INCREASE AND DECREASE COUNT FUNCTIONS
    const increaseCount: () => void = () => dispatch({ type: APP_STATE_REDUCER_ACTION_TYPE.INCREASE_COUNT })
    const decreaseCount: () => void = () => dispatch({ type: APP_STATE_REDUCER_ACTION_TYPE.DECREASE_COUNT })
    
    function handleFormData(e: React.ChangeEvent<HTMLInputElement>): void{
        try{
            const {value} = e.target

            dispatch({
                type: APP_STATE_REDUCER_ACTION_TYPE.UPDATE_NAME,
                payLoad: { formData: { "name": value }}
            })
        }catch(error){
            if(error){
                console.warn(`${(error as Error).name}: ${(error as Error).message}`)
            }
        }
    }

    return(
        <div>
            {/* COUNTER COMPONENT TO HOLD COUNTER */}
            <Counter
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
            >Count is: {count}</Counter>

            {/* COMPONENT TO HOLD INPUTBOX */}
            <InputBox
                formData={formData}
                handleFormData={handleFormData}
            >{formData.name}</InputBox>
        </div>
    )
}