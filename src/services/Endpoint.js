import axios from 'axios'

const Endpoint = axios.create({ baseURL: 'https://blog.apiki.com/wp-json/wp/v2'})

export default Endpoint