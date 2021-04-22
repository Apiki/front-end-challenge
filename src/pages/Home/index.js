import React, { useEffect, useState } from 'react';
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
    <section className='container'>
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
            <a href={post.link}>{post.slug}</a>
          </div>
        );
      })}
      <button onClick={handleClick}>Carregar mais</button>
    </section>
  );
};

export default Home;
