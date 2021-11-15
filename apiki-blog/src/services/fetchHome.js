import axios from 'axios'

const fetchHome = (setData, setTotalPages) => {
  axios
    .get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
    .then((response) => {
      setData(response.data)
      setTotalPages(Number(response.headers['x-wp-totalpages']))
    })
}

export default fetchHome
