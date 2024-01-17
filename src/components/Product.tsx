// IMPORTING NECESSARY FILES
    // IMPORTING PROPS
import {ProductProps} from "../types/Props"
    // IMPORTING ENUMS
import {CART_CONTEXT_REDUCER_ACTION_TYPE} from "../types/Enums"

// DECLARING A FUNCTION THAT RETURNS A PRODUCT COMPONENT
export default function Product({product, handleProduct, inCart, handleIsCleared}: ProductProps){
    // A VARIABLE THAT CONTAINS THE DYNAMIC URL IMPORT
    const imgURL: string = new URL(`../../public/img/${product.sku}.jpg`, import.meta.url).href
    
    // A VARIABLE THAT CONTAINS THE FORMATTED DIPLAYED PRICE
    const displayedPrice: string = new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES"
    }).format(product.price)
    
    return (
        <article className="product">
            <h3>{product.name}</h3>

            <img 
                src={imgURL}
                alt={product.name}
                title={product.name}
                width={100}
                loading="lazy"
            />

            <p>
                {displayedPrice}
                {inCart && "➡ Item in cart ✅"}
            </p>

            <button onClick={() => {
                handleProduct({
                    type: CART_CONTEXT_REDUCER_ACTION_TYPE.ADD_TO_CART,
                    payload: {...product, quantity: 1} 
                })

                handleIsCleared(false)
            }}>Add to cart</button>
        </article>
    )
}