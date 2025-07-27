import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://blog.apiki.com/wp-json/wp/v2/'
});

export const getDevPosts = (page = 1) => api.get(`posts?_embed&categories=518&page=${page}`);
export const getPostBySlug = (slug) => api.get(`posts?_embed&slug=${slug}`);