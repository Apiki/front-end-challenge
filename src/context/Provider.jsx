import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ApikiBlogContext from './ApikiBlogContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const state = {
    data,
    setData,
    loading,
    setLoading,
  };

  return (
    <ApikiBlogContext.Provider value={state}>
      {children}
    </ApikiBlogContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
