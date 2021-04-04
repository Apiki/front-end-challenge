import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ApikiBlogContext from './ApikiBlogContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [continous, setContinous] =useState(false);
  
  const state = {
    data,
    setData,
    loading,
    setLoading,
    details,
    setDetails,
    continous,
    setContinous,
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
