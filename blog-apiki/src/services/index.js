export const fetchAPI = async () => {
    const apiRequest = await fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518");
    const apiResponse = await apiRequest.json();
  return (apiResponse);
};
