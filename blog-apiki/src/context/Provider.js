import React, { useState } from 'react';
import context from './Context';

function Provider({ children }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [singlePost, setSinglePost] = useState([]);

  const contextValues = {
    posts,
    setPosts,
    isFetching,
    setFetching,
    singlePost,
    setSinglePost,
  };

  return (
    <context.Provider value={ contextValues }>
      {children}
    </context.Provider>
  );
}

export default Provider;
