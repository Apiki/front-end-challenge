import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL,
})

export default api
