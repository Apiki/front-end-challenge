import React, { useState, useEffect } from 'react';
import BlogPostCard from '../components/BlogPostCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';
import { fetchPosts, fetchMorePosts } from '../services/FetchPosts';

function Home() {
  const [dataPost, setDataPost] = useState([]);
  const [status, setStatus] = useState('Carregando...');
  const [count, setCount] = useState(1);

  let numCount = count;

  const getDataPost = async () => {
    const postsAPI = await fetchPosts();
    setDataPost(postsAPI);
    setStatus('');
    return postsAPI;
  };

  const getNextDataPost = async () => {
    numCount += 1;
    setCount(numCount);
    const postsAPI = await fetchMorePosts(numCount);
    setStatus('');
    setDataPost(postsAPI);
    return postsAPI;
  };

  useEffect(() => {
    getDataPost();
  }, []);

  return (
    <>
      <Header />
      <Menu />
      <main className="d-flex">
        <section className="home-container">
          {status}
          {dataPost.map((post) => <BlogPostCard post={post} key={post.id} />)}
          <button onClick={getNextDataPost} type="button" className="btn btn-dark-outline">Carregar mais...</button>
        </section>
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default Home;
