import React from 'react';
import '../style/Post.css';

export default function Post({ img, title, content}) {
  return (
    <article className="article">
      <img src={img} alt={`Imagem destacada da publicação ${title}`} />
      <h1>{title}</h1>
      <p>{content}</p>
    </article>
  )
}
