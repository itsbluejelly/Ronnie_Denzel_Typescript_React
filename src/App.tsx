// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import React from "react"
    // IMPORTING COMPONENTS
import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import Product from "./components/Product"
import CartLineItem from "./components/CartLineItem"
    // IMPORTING HOOKS
import CartContextHook from "./hooks/CartContextHook"
import ProductsContextHook from "./hooks/ProductsContextHook"
    // IMPORTING ENUMS
import {PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE} from "./types/Enums"
    // IMPORTING GUARDS
import {arrayHasProducts} from "./types/Guards"

// DECLARING A FUNCTION THAT RETURNS AN APP COMPONENT
export default function App(){
    // DECLARING STATE
        // A STATE TO DETERMINE WHETHER OR NOT TO SHOW THE CART OR PRODUCTS
    const [viewCart, setViewCart] = React.useState<boolean>(false)
        // A STATE TO DETERMINE WHETHER OR NOT THE DATA IS LOADING
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
        // A STATE TO DETERMINE WHETHER OR NOT THE CART IS CLEARED
    const [isCleared, setIsCleared] = React.useState<boolean>(false)

    // DESTRUCTURING HOOKS
        // GETTING THE CART CONTEXT FROM ITS HOOK
    const {totalPrice, totalQuantity, cart, dispatch} = CartContextHook()
        // GETTING THE PRODUCTS CONTEXT FROM ITS HOOK
    const {products, dispatch: productsDispatch} = ProductsContextHook()

    // A FUNCTION TO FETCH THE PRODUCTS DATA FROM API
    const fetchProductsData: () => Promise<void> = React.useCallback(async() => {
        try{
            const response: Response = await fetch("http://localhost:3500/products")
            const data: unknown = await response.json()

            if(!response.ok){
                throw new Error(`${response.status}: Data not found`)
            }else{
                if(!arrayHasProducts(data)){
                    throw new Error("The data given is not of the type ProductType")
                }

                productsDispatch({
                    type: PRODUCTS_CONTEXT_REDUCER_ACTION_TYPE.CREATE_PRODUCTS,
                    payload: data
                })
            }
        }catch(error: unknown){
            console.error(`${(error as Error).name}: ${(error as Error).message}`)
        }finally{
            setIsLoading(false)
        }
    }, [productsDispatch])

    // A USEEFFECT TO CARRY OUT THE FETCH FUNCTION
    React.useEffect(() => {fetchProductsData()}, [fetchProductsData])

    // A FUNCTION TO GENERATE AN ARRAY OF PRODUCTS IN THE DOM
    const generateProductsArray: () => JSX.Element[] = React.useCallback(() => products.map(product => {
        const inCart: boolean = cart.some(item => item.sku === product.sku)

        return <Product
            product={product}
            handleProduct={dispatch}
            inCart={inCart}
            key={product.sku}
            handleIsCleared={setIsCleared}
        />
    }), [cart, dispatch, products])

    // A FUNCTION TO GENERATE AN ARRAY OF CARTLINEITEMS IN THE DOM
    const generateCartLineItemsArray: () => JSX.Element[] = React.useCallback(() => cart.map(item => <CartLineItem
        dispatch={dispatch}
        item={item}
        key={item.sku}
    />), [cart, dispatch])

    return(
        <>
            <Header 
                viewCart={viewCart}
                handleViewCart={setViewCart}
                totalPrice={totalPrice}
                totalQuantity={totalQuantity}
            />
                
                {
                    viewCart 
                        ?   
                    <Cart
                        dispatch={dispatch}
                        totalPrice={totalPrice}
                        totalQuantity={totalQuantity}
                        isCleared={isCleared}
                        handleIsCleared={setIsCleared}
                    >{generateCartLineItemsArray()}</Cart>
                        : 
                    <main className="main main--products">
                        {isLoading ? <p>Loading...</p> : generateProductsArray()}
                    </main>
                }
            
            <Footer 
                viewCart={viewCart}
                totalPrice={totalPrice}
                totalQuantity={totalQuantity}
            />
        </>
    )
}