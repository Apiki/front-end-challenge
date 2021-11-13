import React from 'react';
import PropTypes from 'prop-types';
import './PostCard.css';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  const {
    link,
    description,
    title,
    image,
  } = post;

  return (
    <div className="post-container">
      <img className="post-image" src={image} alt={title} />
      <div>
        <h3 className="post-title">{title}</h3>
        <span className="post-description" dangerouslySetInnerHTML={description} />
        <Link className="post-link" to={`artigo/${link}`}>Ler mais</Link>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    link: PropTypes.string.isRequired,
    description: PropTypes.shape({
      __html: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
