// IMPORTING NECESSARY PROPS
import {CounterProps} from "../types/props"

// DECLARING A FUNCTION THAT RETURNS A COUNTER
export default function Counter(props: CounterProps){
    return(
        <div>
            <h1>{props.children}</h1>
            <button onClick={() => props.increaseCount()}>+</button>
            <button onClick={() => props.decreaseCount()}>-</button>
        </div>
    )
}