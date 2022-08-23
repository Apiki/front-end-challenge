import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import { history } from './utils/history';
import { Routes } from './Routes';
import { GlobalStyles } from './styles/global';
import { RoutesContainer } from './components/RoutesContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router history={history}>
      <RoutesContainer>
        <Routes />
      </RoutesContainer>
    </Router>
  </React.StrictMode>
);