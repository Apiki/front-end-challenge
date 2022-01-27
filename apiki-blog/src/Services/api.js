const POST_URL = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"

export async function getPosts(page) {
  const request = await fetch(`${POST_URL}&page=${page}`);
  const response = await request.json();
  return response
}

export async function getHeaders() {
  const request = await fetch(POST_URL);
  const total = request.headers.get('X-WP-Total');
  const totalPages = request.headers.get('X-WP-TotalPages')
  return [total, totalPages]
}

