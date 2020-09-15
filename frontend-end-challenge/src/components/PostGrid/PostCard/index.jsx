import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoImage from '../../../assets/No-image-available.png';
import './styles.css';

const PostCard = ({ slug, title, _embedded }) => {
  return (
    <div className="card-base card">
      <div className="card-image">
        <figure className="image is-square">
          <img
            src={
              _embedded['wp:featuredmedia']
                ? _embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail
                    .source_url
                : NoImage
            }
            alt={
              _embedded['wp:featuredmedia']
                ? _embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail
                    .file
                : 'Imagem indisponível'
            }
          />
        </figure>
      </div>
      <div className="card-content">
        <h4 className="title is-4">{title}</h4>
        <Link to={`/${slug}`}>
          <p className="content">Ler mais</p>
        </Link>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  _embedded: PropTypes.shape({
    'wp:featuredmedia': PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
