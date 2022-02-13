const API_BASE = "https://blog.apiki.com/wp-json/wp/v2";

const baseFetch = async (endpoint, page) => {
  const req = await fetch(`${API_BASE}${endpoint}&page=${page}`);
  const json = await req.json();
  return json;
}

export const GetPosts = async ( page ) => {
  return [
    await baseFetch("/posts?_embed&categories=518", page)
  ]
}