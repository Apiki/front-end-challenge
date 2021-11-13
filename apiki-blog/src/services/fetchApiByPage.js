import axios from 'axios'

const fetchApiByPage = (page, setData, setPage, setLoading, side) => {
  setLoading(true)

  const pageToFecth = side === 'after' ? page + 1 : page - 1
  setPage(pageToFecth)

  window.scrollTo(0, 0)

  axios
    .get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${pageToFecth}`)
    .then((response) => {
      setData(response.data)
      setLoading(false)
    })
}

export default fetchApiByPage
