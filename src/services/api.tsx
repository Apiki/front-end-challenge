import { useFetch } from "../hooks/useFetch"
import { useHeaders } from "../hooks/useHeaders"
import { CardContent, PostContent } from "../interfaces/interfaces"

export function useFetchFirst() {
    const {data, setData} = useFetch<CardContent[]>('posts?_embed&categories=518')
    return {data, setData}
}

export function useFetchMaxPages() {
    const { headers: maxPages, setHeaders: setPages} = useHeaders('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518', 'X-WP-TotalPages')
    return { maxPages, setPages}
}

export function useFetchPage(page: string) {
    const {data, setData} = useFetch<CardContent[]>(`posts?_embed&categories=518&page=${page}`)
    return {data, setData}
}

export function useFetchPost(slug: string) {
    let {data, setData} = useFetch<PostContent[]>(`posts?_embed&slug=${slug}`)
    return {data, setData}
}