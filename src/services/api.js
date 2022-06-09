export const fetchPosts = async (page) => {
  const requisition = await fetch(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`
  );
  const posts = await requisition.json();

  return posts;
};

export const getNumberOfPages = async () => {
  const requisition = await fetch(
    "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"
  );
  const headers = requisition.headers.get("X-WP-TotalPages");

  return headers;
};

export const getPostBySlug = async (slug) => {
  const requisition = await fetch(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
  );
  const post = await requisition.json();
  return post;
};
