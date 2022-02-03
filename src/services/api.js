import axios, * as others from "axios";

const postsURL =
  "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";

const api = axios.get(postsURL);

export default api;
