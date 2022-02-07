import {Link} from "react-router-dom";
import React, { useEffect, useState,useParams } from 'react';
import axios from "axios";
import './main.css';
import parse from "html-react-parser";


function Main(){

    {/*constantes para Api e para definir a paginação*/}

    const urlBase = axios.create({
        baseURL: " https://blog.apiki.com/wp-json/wp/v2/posts?_embed&",
      });
 
      const [noticias, setNoticias] = useState ([])
      const [noticiasPerPage, setNoticiasPerPage] = useState(10)
      const [currentPage, setCurrentPage] = useState(0)
      
    
      const pages = Math.ceil(noticias.length / noticiasPerPage)
      const startIndex = currentPage * noticiasPerPage;
      const endIndex = startIndex + noticiasPerPage;
      const currentNoticias = noticias.slice(startIndex,endIndex)

        useEffect (() =>{
          urlBase.get(`categories=518&page=1&per_page=50` )
          .then(res => {
            const dadosNoticias = res.data
            setNoticias(dadosNoticias)
            console.log(dadosNoticias)
          })        
      }
    )
 
        useEffect(() => {
          setCurrentPage(0)
        }, [noticiasPerPage])
               
    return(
    <div id='geral'>
      {/*Cabeçalho*/}
      <h1 id="tit_inicio">
        Nossas últimas postagens.
      </h1>
      <p id="paragrafo_inicio">
        Para manter você sempre atualizado.
      </p>
            
      {/*Definição do número de postagens na página*/}
      <div id='qartigos'>
      <p>Itens por página</p>
        <select value={noticiasPerPage} onChange={(e) => setNoticiasPerPage(Number(e.target.value))} >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={25}>25</option>          
        </select>
      </div>

    
      {currentNoticias.map( 
        
        
        noticia =>
        
        
        <div  key={noticia.id}>
          <div id='conteudo'>
          
          {/*Conteudo dos cards na pagina inicial*/}
            <div >
              <img id='foto' src={noticia._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url}></img>
            </div>
            <div id='conteudo_escrito'>
              <h1  >
                <Link id='tit_card' to={{ pathname:`/interna/${noticia.slug}`}}>                
                  {noticia.title.rendered}
                </Link>  
              </h1>
              <p id="paragrafo_card">
                {parse(noticia.excerpt.rendered)}
              </p>
              
                   
                
                  
                         
            </div>
            
          </div>
        </div>
          

          
      )}
      <div id="btn_paginacao">
        
        {/*Paginação*/}

        {Array.from(Array(pages), (noticia, index) => {
          return <button id="btn_paginacao_cont" value={index} onClick={(e) => 
            
            setCurrentPage(Number(e.target.value))}>{index+1}</button>
          
          })}
        
      </div>
            
        </div>
        
        
    );
};

export default Main;


