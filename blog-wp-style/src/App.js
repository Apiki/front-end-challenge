import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaginaInicial from './pages/Principal';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/:id" component={ArticleDetail} />
          <Route exact path="/" component={PaginaInicial} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
