import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import PropTypes from 'prop-types';

export default function Card({ post }) {
  const [ slug, setSlug ] = useState('');
  const { slugRoutes, setSlugRoutes, semImagem } = useContext(Context);

  useEffect(() => {
    setSlug(post.slug);
    const newSlugRoutes = [...slugRoutes, slug];
    setSlugRoutes(newSlugRoutes);
  }, []);

  return (
    <div>
      <img src={(post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].source_url : semImagem} alt="Imagem destacada" />
      <h3>{post.title.rendered}</h3>
      <Link
        to={`/${slug}`}
      >
        {post.slug}
      </Link>
    </div>
  );
}

Card.propTypes = {
  post: PropTypes.object.isRequired,
};
