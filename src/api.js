import axios from "axios";

const api = axios.create({
  baseURL: "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518",
});

export default api;