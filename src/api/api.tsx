import axios from 'axios';

export const baseUrl = 'https://blog.apiki.com/wp-json/';
const api = axios.create({
  baseURL: `${baseUrl}wp/v2/`,
});

export default api;
