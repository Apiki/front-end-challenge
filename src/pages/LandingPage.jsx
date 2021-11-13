import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import PostCard from '../components/PostCard';

const LandingPage = () => {
  const { posts, getNewPosts } = useContext(DataContext);
  const [page, setPage] = useState(2);

  function loadMorePosts() {
    getNewPosts(page);
    setPage(page + 1);
  }

  return (
    <main>
      <h1>Blog Desenvolvimento</h1>
      <div>
        {posts.map((post) => (<PostCard key={post.image} post={post} />))}
      </div>
      <button onClick={loadMorePosts} type="button">Carregar mais</button>
    </main>
  );
};
export default LandingPage;
