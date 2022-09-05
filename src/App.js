import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/home_page'
import Internal from './Pages/internal_page'

// Routes home and page internal
function App() {

   return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/internal_page/:slug" element={<Internal />} />
        </Routes>
    </Router>
   );
}

export default App
