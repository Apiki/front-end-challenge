import axios from "axios"
import { BASE_URL } from "./constants"

export const controller = {
    fetchPosts: async () => {
        const req = await axios(`${BASE_URL}&categories=518`)
        const posts = await req.data
        return posts
    },
    fetchPage: async (number: string | number) => {
        const req = await axios(`${BASE_URL}&categories=518&page=${number}`)
        const page = await req.data
        return page
    },
    fetchPost: async (slug: string | string[] | undefined) => {
        const req = await axios(`${BASE_URL}&slug=${slug}`)
        const post = await req.data
        return post
    }
}