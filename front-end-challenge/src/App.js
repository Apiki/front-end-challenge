import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import PaginaInicial from './pages/PaginaInicial';
import Interna from './pages/Interna';
import Context from './Context/Context';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PaginaInicial} />
        <Route path={`/${window.location.pathname.substring(1)}`} component={Interna} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
