import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

api.defaults.headers.common = {
    "Content-Type": "application/x-www-form-urlencoded"
  }

api.interceptors.request.use(config => {
    const token = localStorage.getItem('@Inter:Token') || ''
    config.headers = {
        'Authorization' : `Bearer ${token}`
    }
    return config
})

export default api;