import {BrowserRouter as Router, Route, Routes, } from "react-router-dom"
import LandingPage from "./pages/landingPage";
import PostPage from "./pages/postPage";
import React from "react"

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={< LandingPage />} />
        <Route path="/post" element={< PostPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
