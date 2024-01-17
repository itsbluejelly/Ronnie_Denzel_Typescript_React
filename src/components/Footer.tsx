// IMPORTING NECESSARY PROPS
import {FooterProps} from "../types/Props"

// DECLARING A FUNCTION THAT RETURNS A FOOTER COMPONENT
export default function Footer(props: FooterProps){
    // A VARIABLE FOR THECURRENT YEAR
    const currentYear: number = new Date().getFullYear()

    return (
        <footer className="footer">
            {props.viewCart && (
                <>
                    <p>Total items: {props.totalQuantity}</p>
                    <p>Total Price: {props.totalPrice}</p>
                </>
            )}

            <p>Shopping Cart &copy; {currentYear}</p>
        </footer>
    )
}