'use client';

import { useState } from 'react';

import LoadMoreButton from '@/components/LoadMoreButton';
import PostCard from '@/components/PostCard';
import { getPostsUrl } from '@/lib/api';
import { formatPost } from '@/lib/formatPost';

export default function PostsFeed({
  initialPosts,
  initialPage,
  initialTotalPages,
}) {
  const [posts, setPosts] = useState(initialPosts);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const hasMore = currentPage < totalPages;

  async function handleLoadMore() {
    const nextPage = currentPage + 1;

    if (isLoading || nextPage > totalPages) {
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch(getPostsUrl(nextPage));

      if (!response.ok) {
        setErrorMessage(
          'Nao foi possivel carregar mais posts. Tente novamente.'
        );
        return;
      }

      const data = await response.json();
      const nextPosts = data.map(formatPost);
      const nextTotalPages = Number(
        response.headers.get('x-wp-totalpages') ?? totalPages
      );

      setPosts((currentPosts) => [...currentPosts, ...nextPosts]);
      setCurrentPage(nextPage);
      setTotalPages(nextTotalPages);
    } catch {
      setErrorMessage(
        'Nao foi possivel carregar mais posts. Tente novamente.'
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="posts-feed">
      {posts.length > 0 ? (
        <div className="posts-feed__grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : null}

      {hasMore ? (
        <div className="posts-feed__actions">
          <LoadMoreButton disabled={isLoading} onClick={handleLoadMore} />
        </div>
      ) : null}

      {errorMessage ? (
        <p className="posts-feed__error" role="status">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
