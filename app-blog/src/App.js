import React from 'react';
import Home from './pages/Home';
import Details from './pages/Details';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={ Home }
      />
      <Route
        exact
        path="/details/:link"
        component={ Details }
      />
    </Switch>
  );
}

export default App;
