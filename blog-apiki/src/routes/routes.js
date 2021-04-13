import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Post from '../pages/PostPage/PostPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/post/:slug" component={Post} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
