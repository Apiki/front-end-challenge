import api from '../api'

export default {
  listar: async (page = null) => {
    try {
      let response = await api.get('posts?_embed&categories=518', {
        params: page
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}
