import { useEffect, useState } from 'react';

import api from '../../services/api';

import { HomeContainer } from './styles';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

export function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      await api.get('/posts?_embed&categories=518')
        .then((response) => {
          console.log(response.data);
          const data = response.data;

          setPosts(data);
          setLoading(false);
        },
        (error) => {
          console.error(error);
        })
    }

    loadPosts();
  }, [])

  return (
    <div>
      <Header />
      
      <HomeContainer>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Card posts={posts} />
        )}
      </HomeContainer>

      <Footer />
    </div>
  )
}