import api from '../api'

export default {
  listar: async (page = null) => {
    try {
      let response = await api.get('posts?_embed&categories=518', {
        params: page
      })
      return response
    } catch (error) {
      console.log(error)
    }
  },
  buscar: async slug => {
    try {
      let response = await api.get('posts?_embed', {
        params: slug
      })
      return response
    } catch (error) {
      console.log(error)
    }
  }
}
