import React, { createContext, useState } from 'react';

const blogApikiContext = createContext();

const useBlogApikiContext = ({ children }) => {

  const [article, setArticle] = useState();
  
  const context = {
    article,
    setArticle,
  };

  return (
    <blogApikiContext.Provider value={context}>
      {children}
    </blogApikiContext.Provider>
  );
};

export { useBlogApikiContext, blogApikiContext };
