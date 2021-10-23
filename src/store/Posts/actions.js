import postService from '@/services/Posts/postService'

const listarPosts = async ({ commit }, search) => {
  let response = await postService.listar(search)
  commit('LIST_POSTS', response)
}

export default {
  listarPosts
}
