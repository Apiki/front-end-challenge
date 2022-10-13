import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard(prop) {
  const { image, title, slug, author } = prop.info;

  return (
    <Link to={`/${slug}`}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
    </Link>
  )
}
