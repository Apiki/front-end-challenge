import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Home, Single} from './pages/';
import { Header, Footer } from './components';

export default function App() {
  return (
    <>    
      <Header />

        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/:slug' element={<Single />}/>
          </Routes>
        </Router>

      <Footer />
    </>
  );
}
