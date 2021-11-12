import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

const DataProvider = ({ children }) => {
  const [isInLandingPage, setIsInLandingPage] = useState(true);

  const contextValue = useMemo(() => ({
    isInLandingPage,
    setIsInLandingPage,
  }), [isInLandingPage]);

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
