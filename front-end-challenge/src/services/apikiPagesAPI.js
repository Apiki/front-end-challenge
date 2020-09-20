export function apikiPagesAPI(page) {
  return fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`);
};
