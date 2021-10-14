import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/apiHome';
import Cards from './Card';

function HomeComp() {
  const [posts, setPosts] = useState([]);

  const fetchApi = async () => {
    const result = await getPosts();
    setPosts(result);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  if (posts.length < 1) return 'Loading...'

  return (
    <>
      <Cards posts={ posts } />
      <button>Carregar mais...</button>
    </>
  );
}

export default HomeComp;
