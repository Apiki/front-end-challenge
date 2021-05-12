import React, { useState, useEffect } from 'react';
import { fetchFunction } from '../Api/index';

// Proptypes
import PropTypes from 'prop-types';

// Context
import BlogContext from '../Context/BlogContext';

export default function BlogProvider({ children }) {
  const [posts, setPosts] = useState('');
  const [mediaPost, setMediaPost] = useState('');
  const [page, setPage] = useState(1);
  
  const context = {
    posts,
    setPosts,
    mediaPost,
    setMediaPost,
    page,
    setPage,
  };
  
  const endPoint = '/wp-json/wp/v2/posts?_embed&categories=518';

  useEffect(() => {
    fetchFunction(endPoint).then((response) => {
      setPosts(response);
    });
  }, []);

  return (
    <BlogContext.Provider value={ context }>
      { children }
    </BlogContext.Provider>
  );
}

BlogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
