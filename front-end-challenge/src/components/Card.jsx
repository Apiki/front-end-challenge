import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import PropTypes from 'prop-types';
import { goToPost } from '../services/goToPost';

export default function Card({ post }) {
  const { semImagem } = useContext(Context);

  return (
    <div className="card-pc">
      <Link className="card link" onClick={() => goToPost(post.slug)}>
        <img
          src={(post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].source_url : semImagem}
          alt="Imagem destacada"
        />
        <div className="text-center margin-left">
          <h3 className="link">{post.title.rendered}</h3>
          <Link
            className="link font-grey"
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
