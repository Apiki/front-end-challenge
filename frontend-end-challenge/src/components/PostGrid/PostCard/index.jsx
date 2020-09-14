import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoImage from '../../../assets/No-image-available.png';

const PostCard = ({ slug, title, _embedded }) => {
  return (
    <div>
      <div>
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
      </div>
      <div>
        <h3>{title}</h3>
        <Link to={`/${slug}`}>Ler mais</Link>
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
