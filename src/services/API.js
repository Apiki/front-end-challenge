export async function fetchCategoryDev() {
  const fetchCategoryDev = await fetch(
    "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"
  );
  const result = await fetchCategoryDev.json();
  return result;
}

export async function fetchPost(slug) {
  const fetchPost = await fetch(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
  );
  const result = await fetchPost.json();
  return result;
}

export async function fetchMorePages(page) {
  const fetchMorePost = await fetch(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`
  );
  const result = await fetchMorePost.json();
  return result;
}

export const fetchForHeader = async () => {
  const Url =
    "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=1";

  const { headers } = await fetch(Url).then((response) => response);
  return headers.get("x-wp-totalpages");
};
