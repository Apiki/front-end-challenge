import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Post } from './components/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Desafio aceito!</h1>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:slug">
          <Post />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
