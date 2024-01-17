// IMPORTING NECESSARY FILES
    // IMPORTING PROPS
import {HeaderProps} from "../types/Props"
    // IMPORTING COMPONENTS
import Navbar from "./Navbar"

// DECLARING A FUNCTION THAT RETURNS A HEADER COMPONENT
export default function Header(props: HeaderProps){
    return (
        <header className="header">
            <div className="header__title-bar">
                <h1>Acme Co.</h1>

                <div className="header__price-box">
                    <p>Total items: {props.totalQuantity}</p>
                    <p>Total Price: {props.totalPrice}</p>
                </div>
            </div>

            <Navbar
                viewCart={props.viewCart}
                handleViewCart={props.handleViewCart}
            />
        </header>
    )
}