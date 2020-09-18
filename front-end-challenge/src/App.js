import React, { useEffect } from 'react';
import './App.css';
import { apikiAPI } from './services/apikiAPI';
import Provider from './Context/Provider';
import PaginaInicial from './pages/PaginaInicial';

function App() {
  useEffect(() => {
    apikiAPI().then((response) => {
      console.log(response);
    })
  }, []);
  return (
    <Provider>
      <PaginaInicial />
    </Provider>
  );
}

export default App;
