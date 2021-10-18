import axios from "axios";

/* Create and return a default config to axios */
const ApiClient = axios.create({
  baseURL: "https://blog.apiki.com/wp-json/wp/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

/* Accepts config overwrite */
ApiClient.interceptors.request.use((config) => {
  return config;
});

export default ApiClient;
