// IMPORTING NECESSARY PROPS
import {NavbarProps} from "../types/Props"

// DECLARING A FUNCTION THAT RETURNS A NAVBAR COMPONENT
export default function Navbar(props: NavbarProps){
    return (
        <nav className="nav">
            <button onClick={() => props.handleViewCart(prevState => !prevState)}>
                {props.viewCart ? "View Products" : "View Cart"}
            </button>
        </nav>
    )
}