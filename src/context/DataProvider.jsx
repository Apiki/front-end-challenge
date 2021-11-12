import React from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

const DataProvider = ({ children }) => {
  const contextValue = 0;

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
