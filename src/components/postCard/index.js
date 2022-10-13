import React from 'react';

export default function PostCard(prop) {
  const { image, title, slug, author } = prop.info;
  console.log(author);
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  )
}
