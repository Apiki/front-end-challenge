import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/main/index';
import Details from './pages/details';


const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={Main} />
    <Route path="/details/:slug" component={Details} />
  </BrowserRouter>
);

export default Routes;
