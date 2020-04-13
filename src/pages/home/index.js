import React from 'react';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';
import Card from '../../components/card';

import './styles.scss';

const Home = () => {
  const [posts, setPosts] = React.useState([]);
  const [buttonVisible, setButtonVisible] = React.useState(true);
  const totalPages = React.useRef(0);
  const page = React.useRef(1);

  const getPosts = async ({ numPage }) => {
    const result = await api.get('/posts', {
      params: {
        _embed: true,
        categories: 518,
        page: numPage,
      },
    });
    console.log(result);
    return result;
  };

  const handleLoadClick = async () => {
    page.current += 1;

    const result = await getPosts({ numPage: page.current });
    setPosts([...posts, ...result.data]);

    if (page.current > totalPages.current - 1) {
      setButtonVisible(false);
    }
  };

  React.useEffect(() => {
    (async () => {
      const result = await getPosts({ numPage: page.current });
      totalPages.current = result.headers['x-wp-totalpages'];
      setPosts(result.data);
    })();
  }, []);

  return (
    <div className="home-container">
      <h1 className="page-title">Últimas postagens</h1>
      <div className="post-list">
        {posts.map((post) => (
          <Card
            createdDate={post.date}
            icon={faArrowCircleRight}
            // eslint-disable-next-line no-underscore-dangle
            img={post._embedded['wp:featuredmedia'][0].source_url}
            key={post.id}
            modifiedDate={post.modified}
            scaleOnHover
            slug={post.slug}
            title={post.title.rendered}
          />
        ))}
      </div>
      {posts.length > 0 && buttonVisible && (
        <button onClick={handleLoadClick} className="button-load">Carregar mais...</button>
      )}
    </div>
  );
};

export default Home;
