import axios from "axios"

const URL_BASE = 'https://blog.apiki.com/wp-json/wp/v2/'
const ARTICLE_LIST = 'posts?_embed&categories=518'
const ARTICLE = 'posts?_embed&slug='

const services = {
    getArticleList: async (page, setPage) => {
        const PAGE = page > 1 ? `&page=${page}` : ''
        const request = await axios.get(URL_BASE+ARTICLE_LIST+PAGE)
        .then((response) => {
            const headers = response.headers['x-wp-totalpages']
            console.log(headers)
            setPage(headers)
            return response.data
        })
        return request
    },
    getArticle: async (slug) => {
        const request = await axios.get(URL_BASE+ARTICLE+`${slug}`)
        .then((response) => response.data)
        return request
    }

}

export default services