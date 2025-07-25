import React from 'react';
import { Link } from 'react-router-dom';
import { WordPressPost } from '../../types';
import './PostCard.css';

interface PostCardProps {
  post: WordPressPost;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
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
    <article className="post-card">
      <Link to={`/post/${post.slug}`} className="post-card__link">
        <div className="post-card__image-container">
          {featuredImage ? (
            <img 
              src={featuredImage} 
              alt={imageAlt}
              className="post-card__image"
              loading="lazy"
            />
          ) : (
            <div className="post-card__placeholder">
              <span>No Image</span>
            </div>
          )}
        </div>
        <div className="post-card__content">
          <h2 className="post-card__title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <p className="post-card__excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <time className="post-card__date" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>
      </Link>
    </article>
  );
}; 