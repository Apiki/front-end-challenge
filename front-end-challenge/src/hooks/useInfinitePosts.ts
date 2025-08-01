import { type InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

import api from "../api/client";
import type { Page, Post, WPPost } from "../types/Post";

export function useInfinitePosts(categoryId = 518) {
  return useInfiniteQuery<
    Page,
    Error,
    InfiniteData<Page>,
    ["posts", number],
    number
  >({
    queryKey: ["posts", categoryId],
    queryFn: async ({ pageParam = 1 }) => {
      const resp = await api.get<WPPost[]>("/posts", {
        params: {
          _embed: true,
          categories: categoryId,
          page: pageParam,
        },
      });

      const totalPages = Number(resp.headers["x-wp-totalpages"] || 1);

      const posts: Post[] = resp.data.map((wp) => ({
        id: wp.id,
        date: wp.date,
        slug: wp.slug,
        title: wp.title.rendered,
        excerpt: wp.excerpt.rendered,
        content: wp.content.rendered,
        mediaUrl: wp._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
      }));

      return {
        posts,
        totalPages,
        currentPage: pageParam,
      };
    },
    initialPageParam: 1,
    getNextPageParam: (last) =>
      last.currentPage < last.totalPages ? last.currentPage + 1 : undefined,
  });
}
