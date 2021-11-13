import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Post from './pages/Post'
import Header from './components/Header'

import './css/App.css'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
