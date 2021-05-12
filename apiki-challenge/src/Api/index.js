const apiUrl = 'https://blog.apiki.com';

const fetchFunction = async (endPoint) => {
  const response = await fetch(`${apiUrl}${endPoint}`);
  const data = await response.json();
  return data;
};

// const fetchPagesFunction = async () => {
//   const response = await fetch(`${apiUrl}${/wp-json/wp/v2/posts?_embed&categories=518}`);
//   const data = await response.header['X-WP-TotalPages'];
//   return response;
// };

export {
  fetchFunction,
};
