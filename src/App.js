import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CardList from './components/CardList';
import Article from './pages/Article';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CardList} />
        <Route exact path="/article/:id" component={Article} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
