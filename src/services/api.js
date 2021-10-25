import axios from 'axios'
import Vue from 'vue'

const api = axios.create({
  baseURL: 'https://blog.apiki.com/wp-json/wp/v2'
  // headers: {
  //   'Access-Control-Allow-Origin': '*'
  // }
  //timeout: 3000
})

const errors = [400, 401, 404, 500]

api.interceptors.request.use(async config => {
  try {
    const token = window.localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  } catch (error) {
    console.log(error)
  }
})

api.interceptors.response.use(async response => {
  try {
    if (response.status == 200) {
      return response
    }
    if (response.status == 201) {
      Vue.$toast.open(response.statusText, {
        type: 'success',
        position: 'top-right'
      })
    }
    if (errors.includes(response.status)) {
      Vue.$toast.open(response.statusText, {
        type: 'error',
        position: 'top-right'
      })
    }
    return response
  } catch (error) {
    console.log(error)
  }
})

export default api
