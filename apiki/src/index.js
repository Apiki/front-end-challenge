import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AplicationProvider from './context/ContextAplication';

ReactDOM.render(
  <AplicationProvider>
    <App />
  </AplicationProvider>,
  document.getElementById('root')
);

