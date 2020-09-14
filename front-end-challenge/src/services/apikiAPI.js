const fetchBaseUrl = (pageNumber) => fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${pageNumber}`);

const getSinglePost = (slug) => fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
.then((response) => response.json()
.then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export {
  fetchBaseUrl,
  getSinglePost,
};
