import React from 'react';
import PropTypes from 'prop-types';
import PostCard from './PostCard';

const PostGrid = ({ data }) => {
  return (
    <section>
      {data.map(({ id, slug, title, _embedded }) => (
        <PostCard
          key={id}
          slug={slug}
          title={title.rendered}
          _embedded={_embedded}
        />
      ))}
    </section>
  );
};

PostGrid.defaultProps = { data: null };

PostGrid.propTypes = { data: PropTypes.arrayOf(PropTypes.object) };

export default PostGrid;
