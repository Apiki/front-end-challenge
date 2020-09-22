import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import PropTypes from 'prop-types';

export default function Card({ post }) {
  const { semImagem } = useContext(Context);

  return (
    <div>
      <Link className="card link" to={`/${post.slug}`}>
        <img className="img-sm" src={(post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].source_url : semImagem} alt="Imagem destacada" />
        <div>
          <h3 className="link">{post.title.rendered}</h3>
          <Link
            className="link font-grey"
            to={`/${post.slug}`}
          >
            {post.slug}
          </Link>
        </div>
      </Link>
    </div>

  );
}

Card.propTypes = {
  post: PropTypes.object.isRequired,
};
