import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home } from './pages/home'
import { DetailsPost } from './pages/detailsPost'
import { Favorite } from './pages/favorite'

export const Router = () => (
  <Switch>
    <Route path="/home" render={(props) => <Home {...props} />} />
    <Route path="/page/:slug" render={(props) => <DetailsPost {...props} />} />
    <Route path="/favoritos" render={(props) => <Favorite {...props} />} />
    <Route path="*" render={(props) => <Redirect {...props} to="/home" />} />
  </Switch>
)
