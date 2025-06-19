import axios from 'axios'
import { useAuthStore } from './useAuthStore'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
})

axiosInstance.interceptors.request.use(
    (config) => {
        const authStore = useAuthStore()

        const token = authStore.accessToken
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            const authStore = useAuthStore()
            authStore.logout()
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)

export default axiosInstance
