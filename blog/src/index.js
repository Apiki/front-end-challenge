import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import MainRoutes from './routes';
import './styles/index.css';
import GlobalContextProvider from "./contexts/GlobalContextProvider/index.jsx";
import Footer from './components/Footer/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalContextProvider>
            <BrowserRouter>
                <Header />
                <MainRoutes />
                <Footer />
            </BrowserRouter>    
        </GlobalContextProvider>
  </React.StrictMode>
);