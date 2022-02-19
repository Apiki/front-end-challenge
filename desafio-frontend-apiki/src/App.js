import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const App = () => {
  return (
      <BrowserRouter>
        <div className='container'>
          <Header />  
          <Banner />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
