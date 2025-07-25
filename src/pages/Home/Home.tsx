import React, { useState, useEffect } from 'react';
import { PostCard } from '../../components/PostCard/PostCard';
import { Button } from '../../components/Button/Button';
import { Loading } from '../../components/Loading/Loading';
import { getPosts } from '../../services/api';
import { WordPressPost, ApiResponse } from '../../types';
import './Home.css';

export const Home: React.FC = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async (page: number = 1) => {
    try {
      setLoading(page === 1);
      setLoadingMore(page > 1);
      setError(null);

      const response: ApiResponse = await getPosts(page);
      
      if (page === 1) {
        setPosts(response.posts);
      } else {
        setPosts(prev => [...prev, ...response.posts]);
      }
      
      setCurrentPage(response.currentPage);
      setTotalPages(response.totalPages);
    } catch (err) {
      setError('Failed to load posts. Please try again later.');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      fetchPosts(currentPage + 1);
    }
  };

  if (loading) {
    return (
      <div className="home">
        <div className="home__container">
          <Loading size="large" text="Loading posts..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home">
        <div className="home__container">
          <div className="home__error">
            <h2>Oops! Something went wrong</h2>
            <p>{error}</p>
            <Button onClick={() => fetchPosts(1)}>Try Again</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="home__container">
        <header className="home__header">
          <h1 className="home__title">Latest Development Posts</h1>
          <p className="home__subtitle">
            Discover the latest insights, tutorials, and best practices in software development
          </p>
        </header>

        <section className="home__content">
          {posts.length === 0 ? (
            <div className="home__empty">
              <h2>No posts found</h2>
              <p>There are no posts available at the moment.</p>
            </div>
          ) : (
            <>
              <div className="home__grid">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
              
              {currentPage < totalPages && (
                <div className="home__load-more">
                  <Button
                    onClick={handleLoadMore}
                    loading={loadingMore}
                    disabled={loadingMore}
                  >
                    {loadingMore ? 'Loading...' : 'Load More'}
                  </Button>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
}; 