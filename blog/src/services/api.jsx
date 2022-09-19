import axios from "axios";

const instance = axios.create({
  baseURL: "https://blog.apiki.com/wp-json/wp/v2/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default instance;