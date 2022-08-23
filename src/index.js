import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import { history } from './utils/history';
import { Routes } from './Routes';
import { GlobalStyles } from './styles/global';
import { RoutesContainer } from './components/RoutesContainer';
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthProvider>
      <Router history={history}>
        <RoutesContainer>
          <Routes />
        </RoutesContainer>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);