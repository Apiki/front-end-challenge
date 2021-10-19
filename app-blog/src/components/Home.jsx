import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/apiHome';
import Cards from './Card';
import Header from './Header';
import Footer from './Footer';

function HomeComp() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchApi = async () => {
    const data = await getPosts(page);
    setPosts(data);
  }

  useEffect(() => {
    fetchApi();
  }, [page]);

  const handleClick = () => {
    const maxPages = 17;
    setPage((page + 1) % maxPages);
  }

  if (posts.length < 1) return 'Loading...'

  return (
    <div className="d-flex flex-column mt-3">
      <div className="d-flex justify-content-center">
        <Cards posts={ posts } />
      </div>
      <button
        className="d-flex btn btn-outline-secondary justify-content-center mx-auto m-5 shadow rounded w-25"
        onClick={ () => handleClick() }
        >
          Carregar mais...
      </button>
    </ div>
  );
}

export default HomeComp;
