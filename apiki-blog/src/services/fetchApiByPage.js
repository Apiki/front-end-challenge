import axios from 'axios'

const fetchApiByPage = (page, data, setData, setPage) => {
  setPage(page + 1)

  axios
    .get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`)
    .then((response) => setData([...data, ...response.data]))
}

export default fetchApiByPage
