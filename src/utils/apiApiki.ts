export const api = {
    fetchData: async (endpoint: string | number) => {
        const req = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${endpoint}`)
        const json = await req.json()
        return json
    },
    fetchMaxPage: async () => {
        const req = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518`)
        const header = req.headers.get('X-WP-TotalPages')
        const maxPage = header?.toString()
        return maxPage
    },
    fetchPost: async (slug: string | undefined) => {
        const req = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
        const json = await req.json()
        return json
    }

}
