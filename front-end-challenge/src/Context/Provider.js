import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(10);
  const [dataNextPage, setDataNextPage] = useState([]);

  const store = {
    data,
    setData,
    pageNumber,
    setPageNumber,
    dataNextPage,
    setDataNextPage,
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
