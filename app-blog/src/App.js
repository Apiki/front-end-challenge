import React from 'react';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route
        path="/"
        component={ Home }
      />
    </Switch>
  );
}

export default App;
