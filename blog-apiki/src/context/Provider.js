import React, { useState } from 'react';
import context from './Context';

function Provider({ children }) {
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  const contextValues = {
    posts,
    setPosts,
    singlePost,
    setSinglePost,
    pageNumber,
    setPageNumber,
    maxPages,
    setMaxPages,
  };

  return (
    <context.Provider value={ contextValues }>
      {children}
    </context.Provider>
  );
}

export default Provider;
