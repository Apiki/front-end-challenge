import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article/:id" component={Article} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
