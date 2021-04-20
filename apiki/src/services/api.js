export const getPosts = async (page=1) => {
  const response = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`);
  const posts = await response.json();
  const headers = response.headers;
  
  return ({ posts, headers });
    
};

export const getPost = async (slug) => {
  const response = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
    .then(res => res.json());
  
  return response[0];
};