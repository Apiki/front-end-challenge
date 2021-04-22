import React, { useEffect, useState } from 'react';

import './styles.scss';

const Home = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518'
      );
      console.log(response.headers['X-WP-Total']);
      const data = await response.json();
      setTotal();
      setData(data);
    }

    loadPosts();
  }, []);

  console.log(data);

  return (
    <section className='container'>
      <div>
        <h2>{data[0]?.title.rendered}</h2>
        <img
          src={
            data[0]?._embedded['wp:featuredmedia'][0].media_details.sizes
              .thumbnail.source_url
          }
          alt='immageeee'
        />
        <p>{data[0]?._embedded.author[0].name}</p>
        <a href={data[0]?.link}>{data[0]?.slug}</a>
      </div>
    </section>
  );
};

export default Home;
