'use client';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import LoadingSpinner from '@/components/Loading/LoadingSpinner';
import LoadMoreButton from '@/components/LoadMoreButton/LoadMoreButton';
import PostCard from '@/components/PostCard/PostCard';
import { fetchPosts } from '@/services/api';
import { useEffect, useState } from 'react';

type Post = {
  id: number;
  slug: string;
  title: { rendered: string };
  _embedded: {
    ['wp:featuredmedia']: { source_url: string }[];
  };
};

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPosts(page);
  }, []);

  async function loadPosts(currentPage: number) {
    setIsLoading(true);
    const { data, totalPages }: { data: Post[]; totalPages: number } = await fetchPosts(currentPage);

    setPosts((prev) => {
      const existingSlugs = new Set(prev.map((p: Post) => p.slug));
      const filtered = data.filter((p: Post) => !existingSlugs.has(p.slug));
      return [...prev, ...filtered];
    });

    setTotalPages(totalPages);
    setIsLoading(false);
  }

  function handleLoadMore() {
    const nextPage = page + 1;
    setPage(nextPage);
    loadPosts(nextPage);
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow px-4 py-8 max-w-7xl mx-auto w-full">
          <div className="post-list grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard
                key={`${post.id}-${post.slug}`}
                title={post.title.rendered}
                imageUrl={post._embedded['wp:featuredmedia'][0].source_url}
                slug={post.slug}
              />
            ))}
          </div>

          {page < totalPages && (
            <div className="mt-8 flex justify-center">
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <LoadMoreButton onClick={handleLoadMore} disabled={page >= totalPages} />
              )}
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
