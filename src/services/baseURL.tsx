import axios from "axios";

export const api = axios.create({
    baseURL: 'https://blog.apiki.com/wp-json/wp/v2/'
})