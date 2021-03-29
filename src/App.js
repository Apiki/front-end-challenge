import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CardList from './components/CardList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CardList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
