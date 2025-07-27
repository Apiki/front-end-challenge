import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import PostCard from '../../components/PostCard/PostCard';
import { api } from '../../services/api';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadPosts(1);
  }, []);

  const loadPosts = async (page) => {
    try {
      const response = await api.get(`/posts?_embed&categories=518&page=${page}`);
      const newPosts = response.data;
      setPosts((prev) => [...prev, ...newPosts]);
      setTotalPages(Number(response.headers['x-wp-totalpages']));
    } catch (error) {
      console.error('Erro ao carregar posts', error);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadPosts(nextPage);
  };

  return (
    <main className={styles.home}>
      <h1 className={styles['home__title']}>Desenvolvimento</h1>
      <div className={styles['home__posts']}>
        {posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
      {page < totalPages && (
        <button className={styles['home__load-button']} onClick={handleLoadMore}>Carregar mais</button>
      )}
    </main>
  );
}