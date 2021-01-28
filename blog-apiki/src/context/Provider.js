import React, { useState } from 'react';
import context from './Context';

function Provider({ children }) {
  const [posts, setPosts] = useState('');
  const [isFetching, setFetching] = useState(false);

  const contextValues = {
    posts,
    setPosts,
    isFetching,
    setFetching,
  };

  return (
    <context.Provider value={ contextValues }>
      {children}
    </context.Provider>
  );
}

export default Provider;
