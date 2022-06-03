import axios from "axios";

export const api = axios.create({
    baseURL: "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518",
})

export const postApi = axios.create({
    baseURL: "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug="
})
