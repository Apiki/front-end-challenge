const POSTS_URL = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"
const NOTICE_URL = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug="


export async function getPosts(page) {
  const request = await fetch(`${POSTS_URL}&page=${page}`);
  const response = await request.json();
  return response
}

export async function getHeaders() {
  const request = await fetch(POSTS_URL);
  const total = request.headers.get('X-WP-Total');
  const totalPages = request.headers.get('X-WP-TotalPages')
  return [total, totalPages]
}

export async function getNotice(slug){
  const request = await fetch(`${NOTICE_URL}${slug}`);
  const response = await request.json();
  return response
}
