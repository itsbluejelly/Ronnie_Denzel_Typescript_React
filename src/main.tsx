// IMPORTING NECESSARY FILES
  // IMPORTING NECESSARY MODULES
import React from 'react'
import ReactDOM from 'react-dom/client'
  // IMPORTING NECESSARY COMPONENTS
import App from './App.tsx'
  // IMPORTING CSS FILES
import './index.css'
  // IMPORTING NECESSARY CONTEXT
import CountContextProvider from './contexts/CountContext.tsx'
import FormDataContextProvider from './contexts/FormDataContext.tsx'

// CREATING A ROOT INTO THE DOM
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CountContextProvider>
      <FormDataContextProvider>
        <App/>
      </FormDataContextProvider>
    </CountContextProvider>
  </React.StrictMode>,
)
