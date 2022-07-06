import {useState,useEffect} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './app.module.css';
import Footer from './components/footer/Footer';

import Menu from "./components/menu/Menu";
import Post from "./pages/post/Post";
import PostD from "./pages/post/PostD"

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
        <Menu /> 
        
        <Routes>
            <Route path="" element={<Post black={blackHeader} />}/>
                
                
                
            
                <Route path="/busca/:id" element={<PostD />} />
                
            
        
        </Routes>
        <Footer/>
  </BrowserRouter>
  
  </div>
    );
}

export default App;