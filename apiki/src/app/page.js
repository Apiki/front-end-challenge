'use client';

import { getPostsPorPag } from '@/services/api';
import { useState, useEffect } from 'react';
import Posts from '../components/homepage/PostCard';
import styles from "./home.module.scss"

export default function Home() {
  const [posts, setPosts] = useState([])  
  const [page, setPage] = useState(1);         

  const carregarMaisPosts = async () => {
      try {
        const postsData = await getPostsPorPag(page);
        setPosts(prev => [...prev, ...postsData]);
        setPage(prev => prev + 1);
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(() => {
    carregarMaisPosts();
  }, [])

  return (
    <div className={styles.homePage}>
      <Posts posts={posts}/>
      <div>
        <button onClick={() => carregarMaisPosts()} className={styles.buttonLoad}>CARREGAR MAIS</button>
      </div>
    </div>
  );
}