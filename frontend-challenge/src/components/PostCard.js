import React from 'react';
import '../style/PostCard.css';

export default function Post({ img, title, content}) {
  return (
    <article className="article card">
      <img className="article--img" src={img} alt={`Imagem destacada da publicação ${title}`} />
      <h2 className="article--title">{title}</h2>
      <p className="article--content">{content}</p>
      <button className="article--button">Saiba mais</button>
    </article>
  )
}
