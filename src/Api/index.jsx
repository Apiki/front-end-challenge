import axios from "axios";

export const Api = axios.create({
  baseURL: "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518",
});