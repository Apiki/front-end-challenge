import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './global.scss'
import { ContextProvider } from './context'
import { Router } from './router'
function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Router />
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App
