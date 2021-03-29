export async function fetchData() {
  const response = await fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518');
  const data = await response.json();
  return data;
}
