// IMPORTING NECESSARY TYPES
import {UserProps} from "../types/Props"

// A FUNCTION THAT RETURNS A USER COMPONENT
export default function User({name, email}: UserProps){
    return(
        <li>
          <div>
            Name: {name.first} {name.last}
          </div>
          
          <div>Email: {email}</div>
          <hr />
        </li>
    )
}