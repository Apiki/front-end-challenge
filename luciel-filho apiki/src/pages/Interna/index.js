import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import './interna.css';
import parse from "html-react-parser";

function Interna(){

    
    /* 
      Requisição dos posts individuais
    */
      const {slug} = useParams()
      const [noticias, setNoticias] = useState ([])
            
      useEffect (() =>{
        axios.get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
        .then(res => {
          const dadosNoticias = res.data
          console.log(dadosNoticias)
          setNoticias(dadosNoticias)
        })        
    }
  )        
      
    return(
        <div>

      {noticias.map( 
        
        
        noticia =>
        
        
        <div id='geral_int' key={noticia.id}>
        {/*Botão de voltar */}
        <Link id='voltar' to="/">Voltar</Link>
            
            <div id='header_int'>
              
              {/* 
                Inicio da montagem da pagina interna
              */}
              <h1 id='tit_cont'>                
                {noticia.title.rendered}
              </h1> 
              <div>
                <img id='foto_int' src={noticia._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url}></img>
              </div>
              <div id='conteudo_escrito'>
              {parse(noticia.content.rendered)}
              </div>
                
            </div>                 
          </div>
          
      )}
     
        </div>
  
    );
};

export default Interna;




