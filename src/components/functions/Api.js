import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://blog.apiki.com/wp-json/wp/v2'
})
export default Api;