import React from 'react';
import Context from './context';

function Provider({ children }) {
  const context = {};
  return <Context.Provider value={context}>{children}</Context.Provider>;
}
