import React, { useState, useEffect } from 'react';
import { fetchLatestPosts, fetchMorePosts } from '../../services/api';
import PostCard from '../../components/PostCard';
import ReactLoading from 'react-loading';
import './stylesheet.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [disableButton, setDisableButton] = useState(false);
  const [page, setPage] = useState(2);

  useEffect(() => {
    fetchLatestPosts()
    .then((json) => {
      setPosts(json);
      setIsLoading(false);
    });
  }, []);

  const renderMorePosts = async () => {
    setIsLoading(true)
    fetchMorePosts(page)
    .then((res) => {
      const totalPages = res.headers.get('X-WP-TotalPages')
      if (+page >= totalPages) setDisableButton(true);
      return res.json();
    })
    .then((res) => {
      setPosts([...posts ,...res]);
      setPage(page + 1);
      setIsLoading(false);
    });
  }

  return (
    <main className="home-page">

      <h1>Últimas postagens</h1>

      <section className="latest-posts">

  
        {posts.map((post) => <PostCard key={post.id} post={post}/> )}

      </section>

      {!isLoading && <button class="load-more-btn" disabled={disableButton} onClick={renderMorePosts}>Carregar mais</button>}

      {isLoading && <div> <ReactLoading type={"spin"} color={"#FF8C00"} height={150} width={150} /></div> }

    </main>
  );
}

export default Home;
