const URL = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed"


export async function getPosts(page) {
  const request = await fetch(`${URL}&categories=518&page=${page}`);
  const response = await request.json();
  const totalPages = request.headers.get('X-WP-TotalPages')
  return [response, totalPages];
}

export async function getNotice(slug){
  const request = await fetch(`${URL}&slug=${slug}`);
  const response = await request.json();
  return response
}
