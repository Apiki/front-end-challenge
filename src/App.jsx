import React from 'react';
import './style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Single from './pages/single';
import NotFound from './pages/notfound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<Single />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
