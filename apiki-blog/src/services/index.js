import axios from "axios"

const endpoints = {
    ARTICLE_LIST: 'posts?_embed&categories=518',
    ARTICLE: 'posts?_embed&slug=',
    ABOUT: 'types/post'
}

const ApikiClient = axios.create({
    baseURL: 'https://blog.apiki.com/wp-json/wp/v2/',
    headers: {
      'Accept': 'application/json',
    }
  });

const services = {
    getArticleList: async (page, setPage) => {
        const PAGE = page > 1 ? `&page=${page}` : ''
        try {
            const request = await ApikiClient.get(endpoints.ARTICLE_LIST+PAGE)
            const total_pages = request.headers['x-wp-totalpages']
            setPage(total_pages)
            return request.data
        }catch (error) {
            throw error;
        }
    },
    getArticle: async (slug) => {
        const request = await ApikiClient.get(endpoints.ARTICLE+`${slug}`)
        return request.data
    },
    getAbout: async () => {
        const request = await ApikiClient.get(endpoints.ABOUT)
        return request.data
    }

}

export default services