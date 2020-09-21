import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import PaginaInicial from './pages/PaginaInicial';
import Interna from './pages/Interna';
import { apikiAPI } from './services/apikiAPI';
import Context from './Context/Context';

function App() {
  const { setData } = useContext(Context);
  useEffect(() => {
    apikiAPI().then((response) => {
      setData(response);
    });
  }, []);

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
