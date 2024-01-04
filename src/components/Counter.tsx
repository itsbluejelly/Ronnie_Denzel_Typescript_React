// IMPORTING DIFFERENT TYPES
import {CounterProps} from "../types/Props"

// DECLARING A FUNCTION THAT RETURNS A COUNTER COMPONENT
export default function Counter(props: CounterProps){
    return(
        <div>
            <h1>{props.children}</h1>
            <button onClick={() => props.handleCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => props.handleCount(prevCount => prevCount - 1)}>-</button>
        </div>
    )
}