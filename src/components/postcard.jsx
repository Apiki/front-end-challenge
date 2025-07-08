import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  const image = post._embedded['wp:featuredmedia']?.[0]?.source_url;

  return (
    <div className="post-card">
      <img src={image} alt={post.title.rendered} className="post-card__image" />
      <h2 className="post-card__title">{post.title.rendered}</h2>
      <Link to={`/${post.slug}`} className="post-card__link">Ler mais</Link>
    </div>
  );
}
