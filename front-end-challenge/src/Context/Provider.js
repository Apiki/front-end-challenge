import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [ slugRoutes, setSlugRoutes ] = useState([]);

  const store = {
    data,
    setData,
    slugRoutes,
    setSlugRoutes,
  };

  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};