// Props and services
import api from "../services/api"

// Main
export async function getPages() {
    return api.get("posts?_embed&categories=518").then(res => parseInt(res.headers["x-wp-totalpages"]))
}

export async function getPosts(page: number) {
    return api.get(`posts?_embed&categories=518&page=${page}`).then(res => res.data)
}

export async function getSelectedPost(post: string) {
    return api.get(`posts?_embed&slug=${post}`).then(res => res.data)
}