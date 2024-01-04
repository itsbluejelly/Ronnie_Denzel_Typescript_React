// IMPORTING NECESSARY FILES
  // IMPORTING NECESSARY MODULES
import React from 'react'
import ReactDOM from 'react-dom/client'
  // IMPORTING NECESSARY COMPONENTS
import App from './App.tsx'
  // IMPORTING CSS FILES
import './index.css'

// CREATING A ROOT INTO THE DOM
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
