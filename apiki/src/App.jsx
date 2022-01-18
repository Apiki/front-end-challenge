import './App.scss';
import { BrowserRouter as Router, Link, Route, Routes, Outlet, useNavigate } from 'react-router-dom';
import Posts from './pages/posts/posts';
import Home from './pages/home/Home';
import Detales from './pages/post_detales/detales';

export default function App() {
  return (

    <Router>
      <h1>Logo Apiki</h1>
      <Link to={'/'} >
        <button type="button">
          Voltar
        </button></Link>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/posts' element={<Posts />} />
        <Route path='/posts/detales:name' element={<Detales />} />
      </Routes>

    </Router>

  );
}

