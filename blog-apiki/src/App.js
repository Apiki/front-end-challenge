import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Homepage from './pages/Homepage';
import PostDetails from './pages/PostDetails';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route path="/:newsPath" component={ PostDetails } />
      </Switch>
    </Provider>
  );
}

export default App;
