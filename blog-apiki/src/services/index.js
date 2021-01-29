export const fetchAPI = async () => {
    const apiRequest = await fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518");
    const apiResponse = await apiRequest.json();
  return (apiResponse);
};

export const fetchSinglePost = async (slug) => {
  const apiRequest = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`);
  const apiResponse = await apiRequest.json();
return (apiResponse);
};

export const fetchMorePosts = async (page) => {
  const apiRequest = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`);
  console.log(apiRequest.headers.get('X-WP-TotalPages'));
  const apiResponse = await apiRequest.json();
return (apiResponse);
};

export const getMaxPages = async () => {
  const apiRequest = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=1`);
  const maxPages = apiRequest.headers.get('X-WP-TotalPages');
  return (maxPages);
};
