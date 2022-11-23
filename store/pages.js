export const state = () => ({
    pages: []
})

export const mutations = {
    update_state(state, values) {
        Object.keys(values).forEach(key => {
          state[key] = values[key]
        })
    },
}

export const actions = {
    async request_pages({ state, dispatch, commit }, {}) {
        if(state.pages.length > 0) { return; }
        const pages = await dispatch( 'api/get_pages', {}, { root: true });
        if(!pages) return false;
        
        commit( 'update_state', { pages } );
    },
}