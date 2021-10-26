import React from 'react';
import '../style/PostCard.css';

export default function Post({ props: { title, _embedded } }) {

  const img = _embedded['wp:featuredmedia'][0].source_url;

  return (
    <article className="article card">
      <img className="article--img" src={img} alt={`Imagem destacada da publicação ${title}`} />
      <h2 className="article--title">{title.rendered}</h2>
      <button className="article--button">Saiba mais</button>
    </article>
  )
}
