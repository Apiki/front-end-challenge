/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Loading } from '../../components/Loading/Loading';
import { Button } from '../../components/Button/Button';
import { getPostBySlug } from '../../services/api';
import { WordPressPost } from '../../types';
import './Post.css';

export const Post: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      setError(null);

      const postData = await getPostBySlug(slug!);
      setPost(postData);
    } catch (err) {
      setError('Post not found or failed to load.');
      console.error('Error fetching post:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="post-page">
        <div className="post-page__container">
          <Loading size="large" text="Loading post..." />
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="post-page">
        <div className="post-page__container">
          <div className="post-page__error">
            <h1>Post Not Found</h1>
            <p>{error || 'The post you are looking for does not exist.'}</p>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const imageAlt = post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered;
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="post-page">
      <div className="post-page__container">
        <article className="post-page__article">
          <header className="post-page__header">
            <Link to="/" className="post-page__back-link">
              ← Back to Posts
            </Link>
            
            {featuredImage && (
              <div className="post-page__image-container">
                <img 
                  src={featuredImage} 
                  alt={imageAlt}
                  className="post-page__image"
                />
              </div>
            )}
            
            <div className="post-page__meta">
              <time className="post-page__date" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>
            
            <h1 className="post-page__title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </header>

          <div className="post-page__content">
            <div 
              className="post-page__body"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>

          <footer className="post-page__footer">
            <Link to="/" className="post-page__back-button">
              <Button variant="secondary">← Back to All Posts</Button>
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
}; 