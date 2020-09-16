const URL_LATEST_POSTS = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';
const URL_MORE_POSTS = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page='
const URL_SLUG_POST = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=';

export const fetchLatestPosts = () => fetch(URL_LATEST_POSTS)
  .then((res) => res.json()
  .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json)))
);

export const fetchMorePosts = (page) => fetch(`${URL_MORE_POSTS}${page}`);

export const fetchPostBySlug = (slug) => fetch(`${URL_SLUG_POST}${slug}`)
  .then((res) => res.json()
  .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json)))
);
