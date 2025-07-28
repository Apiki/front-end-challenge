"use client";

import { useEffect, useState } from "react";
import { fetchPosts } from "@/lib/services/api";

import PostCard from "@/components/PostCard";
import Loading from "./loading";
import MyButton from "@/components/MyButton";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  const loadInitialPosts = async () => {
    try {
      const data = await fetchPosts(1);
      setPosts(data.posts);
      setCurrentPage(data.currentPage);
      setHasNextPage(data.hasNextPage);
    } catch (err) {
      console.error("Error loading posts:", err);
    }
  };

  const loadMorePosts = async () => {
    if (loadingMore || !hasNextPage) return;

    try {
      setLoadingMore(true);
      const nextPage = currentPage + 1;
      const data = await fetchPosts(nextPage);
      setPosts((prevPosts) => [...prevPosts, ...data.posts]);
      setCurrentPage(data.currentPage);
      setHasNextPage(data.hasNextPage);
    } catch (error) {
      console.error("Error loading posts:", err);
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    loadInitialPosts();
  }, []);

  return (
    <>
      {posts.length > 0 ? (
        <div className="max-w-full mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Blog do desenvolvedor WordPress
            </h1>
            <p className="text-base md:text-lg lg:text-[1.2rem] max-w-full md:max-w-[600px] mx-auto">
              Conteúdo técnico e insights para desenvolvedores. Explore as
              últimas tendências e melhores práticas em desenvolvimento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {hasNextPage && (
            <MyButton
              className={`mt-6 ${
                loadingMore && "bg-transparent hover:bg-transparent"
              }`}
              onClick={loadMorePosts}
            >
              {loadingMore ? <Loading /> : <>Carregar mais...</>}
            </MyButton>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
