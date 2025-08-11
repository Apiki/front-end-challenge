"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import { handleBlogPosts, mapPostToBlogPost } from "@/usePosts";
import SingleCard from "@/components/Card";
import LoadMoreButton from "@/components/LoadMoreButton";
import { CardNamed } from "@/types/CardNamed";
import { BlogResponse } from "@/types/BlogResponse";

interface PostsListProps {
  initialData: BlogResponse;
}

export default function PostsList({ initialData }: PostsListProps) {
  const [posts, setPosts] = useState<CardNamed[]>(
    initialData.posts.map(post => mapPostToBlogPost(post))
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(initialData.totalPages);

  const loadMorePosts = async () => {
    if (loading || currentPage >= totalPages) return;
    
    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const data = await handleBlogPosts(nextPage);
      const newPosts = data.posts.map(post => mapPostToBlogPost(post));
      
      setPosts(prevPosts => [...prevPosts, ...newPosts]);
      setCurrentPage(nextPage);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Erro ao carregar mais posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const hasMorePosts = currentPage < totalPages;

  return (
    <section className={styles["main-home"]} aria-label="Últimas postagens do blog">
      <div className={styles['card-wrapper']}>
        {posts.map((post: CardNamed) => (
          <SingleCard {...post} key={post.id} /> 
        ))}
      </div>
      {hasMorePosts && (
        <LoadMoreButton 
          onLoadMore={loadMorePosts} 
          loading={loading}
        />
      )}
    </section>
  );
}
