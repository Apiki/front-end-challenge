import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

import Home from './pages/home';
import PostDetails from './pages/post-details';
import NotFound from './pages/not-found';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/post-details/:slug" component={PostDetails} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
