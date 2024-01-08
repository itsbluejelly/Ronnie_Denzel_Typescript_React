import { CounterProps } from "../types/Props";

// DECLARING A FUNCTION THAT RETURNS A COUNTER COMPONENT
export default function Counter(props: CounterProps){
    return(
        <div>
            <h1>{props.children}</h1>
            <button onClick={() => props.addCount()}>Add</button>
            <button onClick={() => props.subtractCount()}>Subtract</button>
        </div>
    )
}