
import './App.css'
import { Home } from './views/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostPage } from './views/PostPage';
export function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

