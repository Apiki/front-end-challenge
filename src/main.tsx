import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BlogContextProvider } from './Contexts/BlogContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </React.StrictMode>
)
