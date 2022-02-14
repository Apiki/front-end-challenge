const API_BASE = "https://blog.apiki.com/wp-json/wp/v2";

const baseFetchGetPosts = async (endpoint, page) => {
  const req = await fetch(`${API_BASE}${endpoint}&page=${page}`);
  const json = await req.json();
  return json;
}

const baseFetchGetPostContent = async (endpoint, slug) => {
  const req = await fetch(`${API_BASE}${endpoint}&slug=${slug}`);
  const json = await req.json();
  return json;
}

export const GetPosts = async (page) => {
  return [
    await baseFetchGetPosts("/posts?_embed&categories=518", page)
  ]
}

export const GetPostContent = async (slug) => {
  return [
    await baseFetchGetPostContent("/posts?_embed&", slug)
  ]
}