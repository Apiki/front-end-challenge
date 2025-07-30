import type { PostInterface } from "@/models/post.interface";
import { PostQueries, usePostService } from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useHomeHook() {
  const [currentPage, setCurrentPage] = useState(1);
  const [allPosts, setAllPosts] = useState<PostInterface[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const postService = usePostService();

  const {
    data: PostData,
    isLoading,
    isSuccess
  } = useQuery<{ posts: PostInterface[]; totalPages: number } | undefined>({
    queryKey: [PostQueries.GET_ALL, currentPage],
    queryFn: () => postService.getAllPost(currentPage),
  });

 
  useEffect(() => {
    if (isSuccess && PostData) {
      if (currentPage === 1) {
        
        setAllPosts(PostData.posts);
      } else {
       
        setAllPosts(prev => [...prev, ...PostData.posts]);
        setIsLoadingMore(false);
      }
      setTotalPages(PostData.totalPages);
    }
  }, [PostData, isSuccess, currentPage]);

  const loadMorePosts = () => {
    if (currentPage < totalPages && !isLoadingMore) {
      setIsLoadingMore(true);
      setCurrentPage(prev => prev + 1);
    }
  };

  const hasMorePages = currentPage < totalPages;

  return {
    allPosts,
    isLoading,
    isLoadingMore,
    currentPage,
    totalPages,
    hasMorePages,
    loadMorePosts,
  };
}