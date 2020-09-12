const BASE_URL = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";

const fetchBaseUrl = () => fetch(BASE_URL);

const nextPage = (pageNumber = 1) => fetch(`${BASE_URL}&page=${pageNumber}`)
.then((response) => response.json()
.then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const getSinglePost = (slug) => fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
.then((response) => response.json()
.then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export {
  fetchBaseUrl,
  nextPage,
  getSinglePost,
};
