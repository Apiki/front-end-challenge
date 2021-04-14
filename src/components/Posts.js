import React from 'react';
import { Link } from "react-router-dom";
import './Posts.css';

function Posts ({postagem}) {
  let img = postagem._embedded["wp:featuredmedia"][0].source_url;
  let alt = postagem._embedded["wp:featuredmedia"][0].alt_txt;
  let title = postagem.title["rendered"];
  let slug = postagem.slug;

return(
  <div className='posts'>
    <img className='imgPrimeiraPagina' src={img} alt={alt} />
    <h1 className='tituloPrimeiraPagina'>{title}</h1>
    <div className='link'>
    <Link to={`/${slug}`}>
          Mais informações
        </Link>
        </div>
  </div>
)
}

export default Posts;
