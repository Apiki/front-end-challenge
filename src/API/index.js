const BASE_URL = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed";

export async function basicFetch() {
  const requisition = await fetch(`${BASE_URL}&categories=518`);
  const json = await requisition.json();
  const totalPages = requisition.headers.get("X-WP-TotalPages");
  return [json, totalPages];
}

export async function fetchPages(page) {
  const requisition = await fetch(`${BASE_URL}&categories=518&page=${page}`);
  const json = await requisition.json();
  return json;
}
