import postService from '@/services/Posts/postService'
import Header from '@/helper/Header'

const listarPosts = async ({ commit }, search) => {
  let response = await postService.listar(search)
  commit('HEADER_POST', Header.getHeader(response.headers))
  commit('LIST_POSTS', response.data)
}

const buscarPost = async ({ commit }, slug) => {
  let response = await postService.buscar(slug)
  commit('SHOW_POST', response.data[0])
}
const setBanner = async ({ commit }, obj) => {
  commit('SET_BANNER', obj)
}

export default {
  listarPosts,
  buscarPost,
  setBanner
}
