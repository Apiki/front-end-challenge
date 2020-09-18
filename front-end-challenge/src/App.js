import React from 'react';
import './App.css';
import Provider from './Context/Provider';
import PaginaInicial from './pages/PaginaInicial';

function App() {
  return (
    <Provider>
      <PaginaInicial />
    </Provider>
  );
}

export default App;
