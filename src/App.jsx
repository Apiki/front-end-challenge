import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from '../src/Components/Post/Post';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:slug" element={<Post/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
