/**
 * @author   : Matheus de Castro Sousa
 * @since    : React 17.0.2
 * Date      : 2022-01-19
 * Porpouse  : Page for App
 * React usage : Link, Route, Routes, BrowserRouter for router-dom and sass for style
 * 
 * OBS: Procurei atender todos requisitos solicitados pela apiki, agradeço a oportunidade e atenção, até breve!! ass: matheuscrok
 */

import './App.scss';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
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

