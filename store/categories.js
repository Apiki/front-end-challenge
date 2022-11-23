export const state = () => ({
    categories: [],
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
    push_categs(state, obj_categs) {
        state.categories.push(obj_categs)
    }
}

export const actions = {
    add_categ({ commit }, { categories }) {
        if( !categories ) { return }

        console.log({ categories })

    },
    async request_categs({ dispatch, commit }, { page }) {
        const resultado = await dispatch( 'api/get_categories', { page }, { root: true });
        if(!resultado) return false;

        
        const pagination = {
            active: page ? page : 1,
            total: resultado.totalPages
        }
        commit( 'update_state', { pagination } )
        const categories = resultado.categs
        categories.forEach( categ => commit('push_categs', categ) )

        if(resultado.totalPages > 1) {
            for (let i = 2; i <= resultado.totalPages; i++) {
                const result_page = await dispatch( 'api/get_categories', { page: i }, { root: true });
                if(!result_page) return false;

                const categories_page = resultado.categs
                categories_page.forEach( categ => commit('push_categs', categ) )
                
            }
        }
    },
    
}