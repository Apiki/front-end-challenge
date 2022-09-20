import axios from "axios";

const apiUrl = '"https://blog.apiki.com/wp-json/wp/v2/'

const api = axios.create({
  baseURL: apiUrl
});

export default api;