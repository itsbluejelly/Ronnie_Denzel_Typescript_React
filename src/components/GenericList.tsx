// IMPORTING DIFFERENT TYPES
import {GenericListProps} from "../types/Props"

// EXPORTING A FUNCTION THAT RETURNS A GENERIC LIST COMPONENT
export default function GenericList<T>({items, render}: GenericListProps<T>){
    // A VARIABLE THAT HOLDS AN ARRAY OF REACTNODES FROM THE PROPS ITEMS
    const ReactNodesArray: JSX.Element[] = items.map((item, index) => <li key={index}>{render(item)}</li>)

    return <ul>{ReactNodesArray}</ul>
}
