import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [ slugRoutes, setSlugRoutes ] = useState([]);
  const [internaData, setInternaData] = useState([]);
  const [semImagem] = useState('https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg');

  const store = {
    data,
    setData,
    slugRoutes,
    setSlugRoutes,
    internaData,
    setInternaData,
    semImagem,
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
