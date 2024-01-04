// IMPORTING DIFFERENT TYPES
import {HeadingProps} from "../types/Props"

// A FUNCTION THAT RETURNS A HEADING COMPONENT
export default function Heading(props: HeadingProps){
  return <h1>{props.title}</h1>
}