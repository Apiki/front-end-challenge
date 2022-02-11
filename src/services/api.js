const API_BASE = "https://blog.apiki.com/wp-json/wp/v2";

const baseFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export const GetPosts = async () => {
  return [
    await baseFetch("/posts?_embed&categories=518")
  ]
}