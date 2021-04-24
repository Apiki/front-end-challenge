import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardPost from '../../components/CardPost';
import { api } from '../../services/api';

import './styles.scss';

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  useState();

  useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      const response = await api.get(
        `/posts?_embed&categories=518&page=${page}`
      );

      setTotalPage(response.headers['x-wp-totalpages']);

      setData((prevState) => [...prevState, ...response.data]);
      setLoading(false);
    }

    loadPosts();
  }, [page]);

  function handleClick() {
    if (page === totalPage || loading) {
      return;
    }

    setPage(Number(page) + 1);
  }

  return (
    <section className='section-home'>
      <div className='posts-container'>
        <div className='posts-content'>
          {data.map((post) => {
            return <CardPost key={post.id} post={post} />;
          })}
        </div>
        <div className='box-button'>
          <button onClick={handleClick}>Carregar mais</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
