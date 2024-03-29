// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
import React from 'react'
import ReactDOM from 'react-dom/client'
    // IMPORTING NECESSARY COMPONENTS
import App from './App.tsx'
    // IMPORTING CSS FILES
import './index.css'
    // IMPORTING NECESSARY CONTEXTS
import ProductsContextProvider from './contexts/ProductsContext.tsx'
import CartContextProvider from './contexts/CartContext.tsx'

// CREATING A ROOT INTO THE DOM
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductsContextProvider>
        <CartContextProvider>
            <App/>
        </CartContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>,
)
