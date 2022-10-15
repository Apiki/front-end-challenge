import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../../components/button';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Post } from '../../components/post';
import config from '../../config';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState();

  const noMorePosts = page >= totalPages;

  useEffect(() => {
    fetch(config.siteURL + 'posts?_embed&categories=518&page=' + page)
      .then((r) => {
        setTotalPages(r.headers.get('X-WP-TotalPages'));

        return r.json();
      })
      .then((r) => setPosts((prev) => [...prev, ...r]));
  }, [page]);

  const loadsMorePosts = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  return (
    <>
      <Header />
      <main>
        <div className="wrapper main__content">
          {useMemo(() => {
            return (
              posts.length > 0 &&
              posts.map((post) => <Post key={post.id} post={post} />)
            );
          }, [posts])}

          {posts.length <= 0 && <div className="loader"></div>}

          <Helmet>
            <title>{config.siteTitle}</title>

            <meta name="title" content={config.siteTitle} />
            <meta name="description" content={config.siteDescription} />

            <meta property="og:type" content="article" />
            <meta property="og:title" content={config.siteTitle} />
            <meta property="og:description" content={config.siteDescription} />
            <meta property="og:url" content={config.siteURL} />

            <meta name="twitter:creator" content={config.siteTitle} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={config.siteTitle} />
            <meta name="twitter:description" content={config.siteDescription} />
          </Helmet>

          <Button
            disabled={noMorePosts}
            text="Carregar mais"
            onClick={loadsMorePosts}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
