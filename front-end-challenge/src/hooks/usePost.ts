import { useQuery } from "@tanstack/react-query";

import api from "../api/client";
import type { Post, WPPost } from "../types/Post";

export function usePost(slug: string) {
  return useQuery<Post>({
    queryKey: ["post", slug],
    queryFn: async () => {
      const resp = await api.get<WPPost[]>("/posts", {
        params: { _embed: true, slug },
      });

      const posts: Post[] = resp.data.map((wp) => ({
        id: wp.id,
        date: wp.date,
        slug: wp.slug,
        title: wp.title.rendered,
        excerpt: wp.excerpt.rendered,
        content: wp.content.rendered,
        embedded: wp._embedded,
        mediaUrl:
          wp._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.full
            ?.source_url,
      }));

      return posts[0];
    },
    enabled: !!slug,
  });
}
