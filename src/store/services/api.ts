import axios from 'axios'

const API_URL = 'http://localhost:3001/api/'

const instanceAPI = axios.create({
   withCredentials: true,
   baseURL: API_URL,
})

instanceAPI.interceptors.request.use((config) => {
   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
   return config
})

instanceAPI.interceptors.response.use(
   (config) => {
      return config
   },
   async (error) => {
      const originalRequest = error.config
      if (
         error.response.status === 401 &&
         error.config &&
         !error.config._isRetry
      ) {
         originalRequest._isRetry = true
         try {
            const response = await axios.get(`${API_URL}/refresh`, {
               withCredentials: true,
            })
            localStorage.setItem('token', response.data.accessToken)
            return instanceAPI.request(originalRequest)
         } catch (e) {
            console.log(e)
         }
      }
      throw error
   },
)

export { instanceAPI }

