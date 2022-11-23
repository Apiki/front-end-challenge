const baseUrl = 'https://blog.apiki.com/wp-json/wp/v2/';
export const state = () => ({
    loading: false,
})

export const mutations = {
    update_state(state, values) {
      Object.keys(values).forEach(key => {
        state[key] = values[key]
      })
    }
}
export const actions = {
    async get_posts({ commit }, { params, page }) {
        commit('update_state', { loading: true })
        const endpoint_posts = params ? `${baseUrl}posts${params}` : `${baseUrl}posts`;
        const request_url = page ? `${endpoint_posts}&page=${page}` : `${endpoint_posts}`
        
        let totalPages = 1
        let posts = null;

        await fetch(`${request_url}`)
            .then((r) => {
                totalPages = +r.headers.get('X-WP-TotalPages')
                return r.json()                
            })
            .then(res => {
                commit('update_state', { loading: false })
                posts = res.map( post => {
                    let thumb = '';
                    if( post._embedded ) {
                        thumb = post._embedded['wp:featuredmedia'][0].source_url
                    } else if ( post.yoast_head_json.twitter_image ) {
                        thumb = post.yoast_head_json.twitter_image
                    }
                    const props_post = {
                        id:      post.id,
                        slug:    post.slug,
                        title:   post.title.rendered,
                        content: post.content.rendered,
                        excerpt: post.excerpt.rendered,
                        thumb: thumb
                    }
                    return props_post;
                })
            })
            .catch( _ => {
                commit('update_state', { loading: false })
                return 'Ops. Deu erro ao requisitar os posts.'
            })
        
        const result = { totalPages, posts };  
        return result
    },

    async get_post({}, { slug }) {
        if( ! slug ) { return }
        let post = null;
        const request_url = `${baseUrl}posts?_embed&slug=${slug}`
        await fetch(`${request_url}`)
            .then((r) => r.json())
            .then(res => {
                post = res.map( post => {
                    const props_post = {
                        id:      post.id,
                        slug:    post.slug,
                        title:   post.title.rendered,
                        content: post.content.rendered,
                        thumb: post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : ''
                    }
                    return props_post;
                })
            })
            .catch( _ => {
                return 'Ops. Deu erro ao requisitar o post. :('
            })
        
        return post[0]
       
    },

    async get_categories({}, { page } ) {
        const endpoint_cats = page ? `${baseUrl}categories&page=${page}` : `${baseUrl}categories`
        let totalPages = null
        let categs = null

        await fetch(`${endpoint_cats}`)
            .then((r) => {
                totalPages = +r.headers.get('X-WP-TotalPages')
                return r.json()                
            })
            .then(res => {
                categs = res.map( categ => {
                    const props_categs = {
                        id:          categ.id,
                        slug:        categ.slug,
                        title:       categ.name,
                        description: categ.description,
                    }
                    return props_categs;
                })
            })
            .catch( _ => {
                return 'Ops. Deu erro ao requisitar as categorias.'
            })

        return { totalPages, categs }
    },

    async get_category({}, { slug }) {
        if( ! slug ) { return }
        const request_url = `${baseUrl}categories?_embed&slug=${slug}`
        let category = null
        
        await fetch(`${request_url}`)
            .then((r) => r.json())
            .then(res => {
                category = res.map( categ => {
                    const props_categs = {
                        id:          categ.id,
                        slug:        categ.slug,
                        title:       categ.name,
                        description: categ.description,
                    }
                    return props_categs;
                })
            })
            .catch( _ => {
                return 'Ops. Deu erro ao requisitar a categoria. :('
            })
        
        return category[0]
    },

    async get_pages({}, {}) {
        const resultado = await fetch(`${baseUrl}pages`)
            .then((r) => r.json())
            .then(r => r)
        return resultado
    },

    async get_page({}, { slug }) {
        if( ! slug ) { return }
        let page = null;
        const request_url = `${baseUrl}pages?_embed&slug=${slug}`
        await fetch(`${request_url}`)
            .then((r) => r.json())
            .then(res => {
                page = res.map( post => {
                    const props_post = {
                        id:      post.id,
                        slug:    post.slug,
                        title:   post.title.rendered,
                        content: post.content.rendered,
                        thumb: post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : ''
                    }
                    return props_post;
                })
            })
            .catch( _ => {
                return 'Ops. Deu erro ao requisitar o post. :('
            })
        
        return page[0]
       
    },

}