import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

import './styles.scss';

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      const response = await api.get(
        `/posts?_embed&categories=518&page=${page}`
      );

      setTotalPage(response.headers['x-wp-totalpages']);

      setData((posts) => [...posts, ...response.data]);
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
    <section>
      <h1>Últimos Posts adcionados</h1>
      <div className='container'>
        {data.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title.rendered}</h2>
              <img
                src={
                  post._embedded['wp:featuredmedia'][0].media_details.sizes
                    .thumbnail.source_url
                }
                alt='immageeee'
              />
              <p>{post._embedded.author[0].name}</p>
              <Link to={`/post/${post.slug}`}>{post.slug}</Link>
            </div>
          );
        })}
        <button onClick={handleClick}>Carregar mais</button>
      </div>
    </section>
  );
};

export default Home;
