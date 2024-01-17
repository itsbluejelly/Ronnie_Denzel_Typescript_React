// IMPORTING NECESSARY FILES
    // IMPORTING PROPS
import {CartLineItemProps} from "../types/Props"
    // IMPORTING ENUMS
import {CART_CONTEXT_REDUCER_ACTION_TYPE} from "../types/Enums"
    // IMPORTING MODULES
import React from "react"

// DECLARING A FUNCTION THAT RETURNS A CARTLINEITEM COMPONENT
export default function CartLineItem({item, dispatch}: CartLineItemProps){
    // A VARIABLE THAT CONTAINS THE DYNAMIC URL IMPORT
    const imgURL: string = new URL(`../../public/img/${item.sku}.jpg`, import.meta.url).href
    // A VARIABLE THAT CONTAINS THE LINE'S TOTAL
    const lineTotal: number = item.price * item.quantity
    
    // A FUNCTION THAT FORMATS A NUMBER TO THE DESIRED STRING
    const numberFormatter: (number: number, locale: string | string[], currencyType: string) => string = (number, locale, currencyType) => new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyType
    }).format(number) 
    
    // A VARIABLE THAT CONTAINS THE HIGHEST QUANTITY OF AN ITEM
    const highestQuantity: number = item.quantity > 20 ? item.quantity : 20
    // AN ARRAY CONTAINING THE OPTIONVALUES
    const optionValues: number[] = React.useMemo(() => {
        const numberArray: number[] = []

        for(let i:number = 0; i < highestQuantity; i++){
            numberArray.push(i + 1)
        }

        return numberArray
    }, [highestQuantity])

    // A FUNCTION TO GENERATE AN ARRAY OF OPTIONS
    const generateOptionsArray: () => JSX.Element[] = React.useCallback(() => optionValues.map(value => <option
        key={`opt${value}`}
        value={value}
    >{value}</option>), [optionValues])

    // A FUNCTION TO UPDATE THE QTY OF AN ITEM
    function updateQuantity(e: React.ChangeEvent<HTMLSelectElement>): void{
        const {value} = e.target

        dispatch({
            type: CART_CONTEXT_REDUCER_ACTION_TYPE.ADD_QUANTITY_TO_CART,
            
            payload: {
                sku: item.sku,
                quantity: parseInt(value)
            }
        })
    }

    return (
        <li className="cart__item">
            <img
                src={imgURL}
                alt={item.name}
                title={item.name}
                width={100}
                loading="lazy"
                className="cart__img"
            />

            <div aria-label="Item Name">{item.name}</div>
            <div aria-label="Price Per Item">{numberFormatter(item.price, "en-KE", "KES")}</div>

            <label 
                htmlFor="itemQty"
                className="offscreen"
            >Item Quantity</label>

            <select 
                name="itemQty" 
                id="itemQty"
                className="cart__select"
                value={item.quantity}
                onChange={(e) => updateQuantity(e)}
                aria-label="Item Quantity"
            >{generateOptionsArray()}</select>

            <div 
                className="cart__item-subtotal"
                aria-label="Cart Item Subtotal"
            >{numberFormatter(lineTotal, "en-KE", "KES")}</div>

            <button
                className="cart__button"
                aria-label="Remove Item From Cart"
                title="Remove Item From Cart"
                
                onClick={() => dispatch({
                    type: CART_CONTEXT_REDUCER_ACTION_TYPE.REMOVE_FROM_CART,
                    payload: { sku: item.sku }
                })}
            >🚮</button>
        </li>
    )
}