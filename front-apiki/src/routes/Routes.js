import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/:slug" component={Post}/>
  </Switch>
);

export default Routes;