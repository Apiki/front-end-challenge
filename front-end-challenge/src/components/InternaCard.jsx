import React from 'react';

export default function InternaCard({ post }) {
  const semImagem = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';
  return (
    <div>
      <img src={(post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].source_url : semImagem} />
      <h3>{post.title.rendered}</h3>
    </div>
  );
}
