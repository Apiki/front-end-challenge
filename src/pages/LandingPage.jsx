import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../context/DataContext';
import PostCard from '../components/PostCard';
import './LandingPage.css';

const LandingPage = () => {
  const { posts, getNewPosts, setIsInLandingPage } = useContext(DataContext);
  const [page, setPage] = useState(2);

  function loadMorePosts() {
    getNewPosts(page);
    setPage(page + 1);
  }

  useEffect(() => {
    setIsInLandingPage(true);
  }, []);

  return (
    <main className="landing-page-container">
      <h1 className="landing-page-container-title">Artigos sobre desenvolvimento</h1>
      <div className="posts-container">
        {posts.map((post) => (<PostCard key={post.image} post={post} />))}
      </div>
      <button
        className="landing-page-container-button"
        onClick={loadMorePosts}
        type="button"
      >
        Carregar mais
      </button>
    </main>
  );
};
export default LandingPage;
