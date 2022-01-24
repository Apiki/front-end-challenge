import axios from "axios"

const endpoints = {
    url_base: 'posts?_embed&categories=518',
    article_list: (page) => page > 1 ? 
        endpoints.url_base+`&page=${page}` : 
        endpoints.url_base,
    article_detail: (slug) => `posts?_embed&slug=${slug}`,
    about: 'types/post',
    comments: (post) => `comments?post=${post}`
}

const ApikiClient = axios.create({
    baseURL: 'https://blog.apiki.com/wp-json/wp/v2/',
    headers: {
      'Accept': 'application/json',
    }
  });

const services = {
    getArticleList: async (page, setPage) => {
        try {
            const request = await ApikiClient.get(endpoints.article_list(page))
            const total_pages = request.headers['x-wp-totalpages']
            setPage(total_pages)
            return request.data
        }catch (error) {
            throw error;
        }
    },
    getArticle: async (slug) => {
        const request = await ApikiClient.get(endpoints.article_detail(slug))
        return request.data
    },
    getAbout: async () => {
        const request = await ApikiClient.get(endpoints.about)
        return request.data
    },
    getCommentsChildren: async (post) => {
        const request = await ApikiClient.get(endpoints.comments(post))
        return request.data
    }

}

export default services