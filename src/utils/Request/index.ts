import axios from "axios";

const request = axios.create({
    baseURL: "https://blog.apiki.com/wp-json/wp/v2/posts?_embed",
});

export { request };
