import { useState } from "react";
import PropTypes from 'prop-types';
import AppContext from "./AppContext";

function Provider ({ children }) {
  const [cardPost, setCardPosts] = useState();
  
  const contextValue = {
    cardPost,
    setCardPosts
  };

  return (
    <AppContext.Provider value={ contextValue } >
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;