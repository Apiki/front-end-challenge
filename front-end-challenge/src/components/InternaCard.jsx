import React, { useEffect } from 'react';

export default function InternaCard({ post }) {
  const semImagem = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';
  console.log(post.content.rendered);
  useEffect(() => {
    const content_el = document.querySelector('#content');
    content_el.innerHTML = post.content.rendered;
  }, []);
  return (
    <div>
      <img src={(post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].source_url : semImagem} />
      <h2>{post.title.rendered}</h2>
      <h3>{post.excerpt.rendered.substring(3, (post.excerpt.rendered.length) - 5)}</h3>
      <pre id="content"></pre>
    </div>
  );
}
