import React from 'react';
import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
  const {
    link,
    description,
    title,
    image,
  } = post;

  return (
    <div>
      {link}
      <span dangerouslySetInnerHTML={description} />
      {title}
      <img src={image} alt={title} />
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
