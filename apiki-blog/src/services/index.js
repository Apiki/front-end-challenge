const URL_BASE = 'https://blog.apiki.com/wp-json/wp/v2/'
const ARTICLE_LIST = 'posts?_embed&categories=518'
const ARTICLE = 'posts?_embed&slug='

const services = {
    getArticleList: async (page, setPage) => {
        const PAGE = page > 1 ? `&page=${page}` : ''
        const request = await fetch(URL_BASE+ARTICLE_LIST+PAGE)
        .then((response) => {
            const headers = response.headers.get('X-WP-TotalPages')
            setPage(headers)
            return response.json()
        })
        console.log(request)
        return request
    },
    getArticle: async (slug) => {
        const request = await fetch(URL_BASE+ARTICLE+`${slug}`)
        .then((response) => response.json())
        return request
    }

}

export default services