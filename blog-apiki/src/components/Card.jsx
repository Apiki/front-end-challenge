import React from 'react';
import '../style/Card.css';

export default function Card({img, slug, title, link}) {
  return (
    <div className='card'>
      <img src={img} alt={slug} />
      <h2>{title}</h2>
      <a target="_blank" href={link} rel="noreferrer">Link para postagem</a>
    </div>
  );
}
