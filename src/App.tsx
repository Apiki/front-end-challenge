import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Post } from "./pages/post";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
    </Router>
  );
}
