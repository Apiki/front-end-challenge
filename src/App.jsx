import Home from './components/pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './components/pages/Post/Post';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;