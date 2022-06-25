import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from '../src/Components/Post/Post';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:slug" element={<Post/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
