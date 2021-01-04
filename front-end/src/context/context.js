import React, { createContext, useState } from 'react';

export const contextLease = createContext();

const ContextProvider = ({children}) => {
  const [regionSelected, setRegionSelected] = useState('');

  const context = { regionSelected, setRegionSelected }

  return (
    <contextLease.Provider value={context}>
      {children}
    </contextLease.Provider>
  );
}

export default ContextProvider;
