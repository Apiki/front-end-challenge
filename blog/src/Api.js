export const API_URL = 'https://blog.apiki.com/wp-json/wp/v2/';

export function PAGE_GET({ navPage }) {
  return {
    url: `${API_URL}posts?_embed&categories=518&page=${navPage}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function POST_GET({slug}) {
  return {
    url:`${API_URL}posts?_embed&slug=${slug}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

 