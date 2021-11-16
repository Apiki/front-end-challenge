import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Post from './pages/Post'
import NotFound from './pages/NotFound'
import Header from './components/Header'

import './css/App.css'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
