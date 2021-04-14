const apiApiki = async (pages) => {
  const URL = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${pages}`;
  const resolve = await fetch(URL);
  return resolve;
};

export default apiApiki;
