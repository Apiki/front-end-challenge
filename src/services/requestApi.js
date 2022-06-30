export const apiHeader = async () => {
  const request = await fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=1');
  const data = request.headers.get('X-WP-TotalPages');
  return data;
}

export const fetchPostApi = async (numberPage) => {
  const request = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${numberPage}`);
  const data = await request.json();
  return data;
};

export const fetchInnerPost = async (slug) => {
  const request = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`);
  const data = await request.json();
  return data;
};
