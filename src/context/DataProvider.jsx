import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';
import { getLastestPosts, getNextPagePosts } from '../services/getData';

const DataProvider = ({ children }) => {
  const [isInLandingPage, setIsInLandingPage] = useState(true);
  const [posts, setPosts] = useState([]);

  const getNewPosts = (page) => {
    getNextPagePosts(page).then((data) => {
      setPosts([...posts, ...data]);
    });
  };

  useEffect(() => {
    getLastestPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  const contextValue = useMemo(() => ({
    isInLandingPage,
    setIsInLandingPage,
    posts,
    getNewPosts,
  }), [isInLandingPage, posts]);

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DataProvider;
