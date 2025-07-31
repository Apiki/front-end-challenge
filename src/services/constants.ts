import axios from "axios";

export const ENDPOINT = {
    posts: "posts"
} as const;

export const PARAM = {
    embed: "_embed",
    category: "categories",
    slug: "slug"
} as const;

export const api = axios.create({
    baseURL: "https://blog.apiki.com/wp-json/wp/v2"
});
