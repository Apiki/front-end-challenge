import React, { memo } from 'react';
import PropTypes from 'prop-types';
import PostCard from './PostCard';
import './PostGrid.css';

const PostGrid = ({ data }) => {
  return (
    <div className="grid-base">
      {data.map(({ id, slug, title, _embedded }) => (
        <PostCard
          key={id}
          slug={slug}
          title={title.rendered}
          _embedded={_embedded}
        />
      ))}
    </div>
  );
};

PostGrid.defaultProps = { data: null };

PostGrid.propTypes = { data: PropTypes.arrayOf(PropTypes.object) };

export default memo(PostGrid);
