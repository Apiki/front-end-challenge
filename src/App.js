import {useState,useEffect} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import styles from './app.module.css';

import Pagina1 from './pages/Pagina1';
import Menu from "./components/menu/Menu";
import Filmes from "./pages/filmes/Filmes";
import FilmesD from "./pages/filmes/FilmesD"

function App() {
  const [blackHeader, setblackHeader]= useState(false);
  useEffect(()=>{
    const scrollListener = () =>{
        if(window.scrollY > 10){
          setblackHeader(true);
        }else{
          setblackHeader(false);
        }
    }

    window.addEventListener('scroll', scrollListener);

    return () =>{
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
    return ( 
<div className={styles.app}>
  <BrowserRouter>
        <Menu black={blackHeader}/> 
        
        <Routes>
            <Route path="" element={<Filmes />}/>
                
                
                <Route path="/filmes/populares" element={<Filmes />} />
            
                <Route path="/filmes/detalhe/:id" element={<FilmesD />} />
                
            
        
        </Routes>
        
  </BrowserRouter>
  </div>
    );
}

export default App;