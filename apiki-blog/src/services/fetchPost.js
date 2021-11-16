import axios from 'axios'

const fetchPost = (setData) => {
  const link = location.pathname.split('/')[2]
  return axios
    .get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${link}`)
    .then((response) => setData(response.data[0]))
}

export default fetchPost
