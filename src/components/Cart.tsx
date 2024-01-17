// IMPORTING NECESSARY FILES
    // IMPORTING PROPS
import {CartProps} from "../types/Props"
    // IMPORTING ENUMS
import {CART_CONTEXT_REDUCER_ACTION_TYPE} from "../types/Enums"

// DECLARING A FUNCTION THAT RETURNS A CART COMPONENT
export default function Cart({children, totalPrice, totalQuantity, dispatch, handleIsCleared, isCleared}: CartProps){
    return (
        <main className="main main--cart">
            {
                totalQuantity === 0 && !isCleared
                    ?
                <h2>Sorry, no order has been placed😥</h2>
                    :
                    isCleared
                        ?
                    <h2>Thank you for your order😁</h2>
                        :
                    <>
                        <h2 className="offscreen">Cart</h2>
                        <ul>{children}</ul>

                        <div className="cart__totals">
                            <p>Total items: {totalQuantity}</p>
                            <p>Total price: {totalPrice}</p>

                            <button 
                                className="cart__submit"
                                disabled={isCleared}
                                
                                onClick={() => {
                                    dispatch({ type: CART_CONTEXT_REDUCER_ACTION_TYPE.EMPTY_CART })
                                    handleIsCleared(true)
                                }}
                            >Place Order</button>
                        </div>
                    </>
            }
        </main>
    )
}