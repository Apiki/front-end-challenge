import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Post from './pages/PostPage/PostPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:slug" element={<Post />} />
    </Routes>
  );
}

export default AppRoutes;
