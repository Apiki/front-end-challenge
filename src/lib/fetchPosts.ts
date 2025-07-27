import { PostType } from '@/types/post';

export const fetchPosts = async ({ pageParam = 1 }) => {
  const response = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${pageParam}`, {
    cache: 'force-cache',
  });

  if (!response.ok) {
    throw new Error('Erro ao carregar os posts');
  }

  const totalPages = Number(response.headers.get('X-WP-TotalPages'));
  const totalPosts = Number(response.headers.get('X-WP-Total'));

  const posts: PostType[] = await response.json();

  if (!posts || posts.length === 0) {
    return {
      posts: [],
      totalPages: 0,
      totalPosts: 0,
      nextPage: undefined,
      hasNextPage: false,
    };
  }

  return {
    posts,
    totalPages,
    totalPosts,
    nextPage: pageParam + 1,
    hasNextPage: pageParam < totalPages,
  };
};
