import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import ApikiContext from './apikiContext';

function Provider({ children }) {
  const [posts, setPosts] = useState([]);
  const [id_postDetails, setId_postDetails] = useState('');

  const dataPosts = () => {
    fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
      .then((response) => response.json())
      .then((data) => setPosts(data));
    
  }

  useEffect(() => {
    dataPosts();
  }, []);

  const data = {
    posts,
    id_postDetails,
    setId_postDetails,
  }
  return (
    <ApikiContext.Provider value={ data }>
      {children}
    </ApikiContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
