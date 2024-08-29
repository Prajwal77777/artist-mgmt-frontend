import axios from "axios";

const apiUrl = 'http://localhost:8080/api'

const api = axios.create({
    baseURL: apiUrl
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api