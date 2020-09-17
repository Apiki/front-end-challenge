import React, { createContext, useState } from 'react';

export const contextBlog = createContext();

const ContextProvider = ({ children }) => {
  const [slugReq, setSlugReq] = useState('')
  const [dataApi, setDataApi] = useState([]);

  const context = {
    slugReq,
    setSlugReq,
    dataApi,
    setDataApi,
  }

  return (
    <contextBlog.Provider value={context}>
      {children}
    </contextBlog.Provider>
  );
}

export default ContextProvider;
