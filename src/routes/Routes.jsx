import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/Login';
import NotFound from '../pages/MyTasks';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={LandingPage}
    />
    <Route
      path="/registro"
      component={NotFound}
    />
  </Switch>
);

export default Routes;
