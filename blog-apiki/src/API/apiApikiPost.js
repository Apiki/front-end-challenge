const apiApikiPost = async (slug) => {
  const URL = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`;
  const resolve = await fetch(URL);
  return resolve;
};

export default apiApikiPost;
