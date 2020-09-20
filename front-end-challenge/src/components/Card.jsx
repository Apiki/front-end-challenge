import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';

export default function Card({ post }) {
  const semImagem = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';

  const [ slug, setSlug ] = useState('');

  useEffect(() => {
    setSlug(post.slug);
  }, []);

  return (
    <div>
      <img src={(post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].source_url : semImagem}/>
      <h3>{post.title.rendered}</h3>
      <Link
        to={`/${slug}`}
      >
        {post.slug}
      </Link>
    </div>
  );
}
