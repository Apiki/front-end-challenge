import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Provider from './Context/Provider';
import PaginaInicial from './pages/PaginaInicial';
import Interna from './pages/Interna';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PaginaInicial} />
          {/*<Route path={`/${slug}`} component={Interna} />*/}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
