import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { BlogContextProvider } from './Contexts/BlogContext'
import { DateFormatterProvider } from './Contexts/DateFormatter'
import { PostContextProvider } from './Contexts/PostContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogContextProvider>
        <PostContextProvider>
          <DateFormatterProvider>
            <App />
          </DateFormatterProvider>
        </PostContextProvider>
      </BlogContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
