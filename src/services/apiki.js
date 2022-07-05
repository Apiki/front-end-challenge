import axios from 'axios'
const tmdb = axios.create({
    baseURL: 'https://blog.apiki.com/wp-json/wp/v2/',
    headers: {
        'Content-type': 'application/json;charset=utf-8',
        'Authorization': ''
    }
})

export default tmdb