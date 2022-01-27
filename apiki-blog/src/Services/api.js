const POST_URL = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"

export async function getPosts() {
  const request = await fetch(POST_URL);
  const response = await request.json();
  return response
}
