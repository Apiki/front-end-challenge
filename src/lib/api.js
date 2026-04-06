import { formatPost } from '@/lib/formatPost';

const API_BASE_URL = 'https://blog.apiki.com/wp-json/wp/v2';
const POSTS_ENDPOINT = `${API_BASE_URL}/posts`;
const CATEGORY_ID = 518;
const REVALIDATE_SECONDS = 300;

export function getPostsUrl(page = 1) {
  return `${POSTS_ENDPOINT}?_embed&categories=${CATEGORY_ID}&page=${page}`;
}

function getPostBySlugUrl(slug) {
  return `${POSTS_ENDPOINT}?_embed&slug=${encodeURIComponent(slug)}`;
}

async function getPostsResponse(url) {
  const response = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts from Apiki API.');
  }

  return response;
}

export async function getPosts(page = 1) {
  const response = await getPostsResponse(getPostsUrl(page));
  const data = await response.json();

  return {
    posts: data.map(formatPost),
    total: Number(response.headers.get('x-wp-total') ?? 0),
    totalPages: Number(response.headers.get('x-wp-totalpages') ?? 1),
  };
}

export async function getPostBySlug(slug) {
  const response = await getPostsResponse(getPostBySlugUrl(slug));
  const data = await response.json();
  const post = data[0];

  return post ? formatPost(post) : null;
}
