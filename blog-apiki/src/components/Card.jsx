import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Card.css';

export default function Card({img, slug, title }) {
  return (
    <div className='card'>
      <img src={img} alt={slug} />
      <h2>{title}</h2>
      <Link to={`${slug}`}>Link para postagem</Link>
    </div>
  );
}
