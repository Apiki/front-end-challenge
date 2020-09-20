import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import PaginaInicial from './pages/PaginaInicial';
import Interna from './pages/Interna';
import Context from './Context/Context';

function App() {
  const { slugRoutes } = useContext(Context);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PaginaInicial} />
        {slugRoutes.map((route) => <Route key={route} path={`/${route}`} component={Interna} />)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
