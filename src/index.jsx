import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/themeProvider';
import Roteador from './utils/roteador';
import './global.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Roteador />
        </BrowserRouter>
      </ThemeProvider>
    </CookiesProvider>
  </React.StrictMode>,
);
