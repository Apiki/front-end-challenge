const LIST_POSTS = (state, obj) => {
  state.posts = obj
}

const SHOW_POST = (state, obj) => {
  state.post = obj
}

const ADD_POST = (state, obj) => {
  state.posts.push(obj)
}

const UPDATE_POST = (state, obj) => {
  const index = state.posts.indexOf(obj)
  state.posts[index] = obj
}

const REMOVE_POST = (state, obj) => {
  const index = state.posts.map(item => item.id).indexOf(obj.id)
  state.posts.splice(index, 1)
}

const HEADER_POST = (state, obj) => {
  state.header = obj
}

const SET_BANNER = (state, obj) => {
  state.banner = obj
}

export default {
  LIST_POSTS,
  SHOW_POST,
  ADD_POST,
  UPDATE_POST,
  REMOVE_POST,
  HEADER_POST,
  SET_BANNER
}
