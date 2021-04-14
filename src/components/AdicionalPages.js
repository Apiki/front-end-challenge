import React from 'react';
import './Posts.css';
import { Link } from "react-router-dom";

function AdicionalPages ({postagem}) {
  let img = postagem._embedded["wp:featuredmedia"][0].source_url;
  let alt = postagem._embedded["wp:featuredmedia"][0].alt_txt;
  let title = postagem.title["rendered"];
  let link = postagem.link;
  let slug = postagem.slug;

return(
  <div className='segundoComponente'>
    <img className='imgSegundaPg' src={img} alt={alt} />
    <h1>{title}</h1>
    <div className='link'>
    <Link to={`/${slug}`}>
          Mais informações
        </Link>
        </div>
  </div>
)
}

export default AdicionalPages;
