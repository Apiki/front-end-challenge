import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import PropTypes from 'prop-types';

export default function Card({ post }) {
  const semImagem = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';

  const [ slug, setSlug ] = useState('');

  const { slugRoutes, setSlugRoutes } = useContext(Context);

  useEffect(() => {
    setSlug(post.slug);
    const newSlugRoutes = [...slugRoutes, slug];
    setSlugRoutes(newSlugRoutes);
  }, []);

  return (
    <div>
      <img src={(post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].source_url : semImagem} />
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
