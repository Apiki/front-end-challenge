import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Post } from './pages/Post/Post';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="App__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:slug" element={<Post />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
