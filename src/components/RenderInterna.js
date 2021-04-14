import React from 'react';
import './Posts.css';
function RenderImagem ({postagem}) {
  let img = postagem._embedded["wp:featuredmedia"][0].source_url;

return(
  <div>
    <img className='imagemPgInterna' src={img} />
  </div>
)
}

export default RenderImagem;
