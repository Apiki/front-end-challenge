// const url = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';

const fetchPosts = async () => {
  const url = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const fetchMorePosts = async (numPage) => {
  const url = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${numPage}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const fetchPostsDetails = async (slug) => {
  const url = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { fetchPosts, fetchMorePosts, fetchPostsDetails };
