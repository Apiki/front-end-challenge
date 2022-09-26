import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation, Post, Posts } from './components';

function App() {

   return (
    <Router>
        <Navigation />
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/:slug" element={<Post />} />
        </Routes>
    </Router>
   );
}

export default App