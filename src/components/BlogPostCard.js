import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { removeTags, getDate } from '../helpers';

function BlogPostCard(props) {
  const {
    post: {
      title, date, excerpt, _embedded, slug,
    },
  } = props;

  const excerptText = removeTags(excerpt.rendered);
  const featuredImage = _embedded['wp:featuredmedia'][0].yoast_head_json.og_url;
  const datePost = getDate(date);

  return (
    <div className="card d-flex mb-3">
      <img className="card-img" alt="Imagem principal do post" src={featuredImage} data-holder-rendered="true" />
      <div className="card-body ml-3">
        <h3 className="mb-0">
          <Link to={`/${slug}`}>
            <h3>{title.rendered}</h3>
          </Link>
        </h3>
        <div className="mb-1">{datePost}</div>
        <p className="mb-2">{excerptText}</p>
        <Link to={`/${slug}`}> Continue lendo... </Link>
      </div>
    </div>
  );
}

BlogPostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.objectOf(PropTypes.string),
    date: PropTypes.string,
    excerpt: PropTypes.shape({
      rendered: PropTypes.string,
      protected: PropTypes.bool,
    }),
    id: PropTypes.number,
    _embedded: PropTypes.shape({
      'wp:featuredmedia': PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    }),
    slug: PropTypes.string,
  }).isRequired,
};

export default BlogPostCard;
