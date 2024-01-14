// IMPORTING NECESSARY FILES
    // IMPORTING PROPS
import {CounterProps} from "../types/Props"
    // IMPORTING ENUMS
import {COUNT_CONTEXT_REDUCER_ACTION_TYPE} from "../types/Enums"

// A FUNCTION THAT RETURNS A COUNTER COMPONENT
export default function Counter(props: CounterProps){
    return(
        <div>
            <h1>{props.children}</h1>
            <button onClick={() => props.handleCount({ type: COUNT_CONTEXT_REDUCER_ACTION_TYPE.INCREASE_COUNT })}>+</button>
            <button onClick={() => props.handleCount({ type: COUNT_CONTEXT_REDUCER_ACTION_TYPE.DECREASE_COUNT })}>-</button>
        </div>
    )
}