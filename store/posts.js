export const state = () => ({
    posts: [],
    pagination: {
        total: 1,
        active: 1
    }
})

export const mutations = {
    update_state(state, values) {
        Object.keys(values).forEach(key => {
          state[key] = values[key]
        })
    },
    push_posts(state, obj_posts) {
        state.posts.push(obj_posts)
    }
}

export const actions = {
    async request_posts({ dispatch, commit }, { params, page, bool_load_page }) {
        if( bool_load_page ) {
            commit( 'update_state', { posts: [] })
            commit( 'update_state', { pagination: { total: 1, active: 1 } } )
        }
        const resultado = await dispatch( 'api/get_posts', { params, page }, { root: true });
        
        if(!resultado) return false;
        const pagination = {
            active: page ? page : 1,
            total: resultado.totalPages
        }
        commit( 'update_state', { pagination } )
            //const posts = resultado.posts.length > 0 ? resultado.posts : []
        const posts = {
            page: page ? page : 1,
            posts: resultado.posts.length > 0 ? resultado.posts : []
        }
        commit( 'push_posts', posts )
    }
}