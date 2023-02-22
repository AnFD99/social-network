import { instanceAPI } from './api'

const authAPI = {
   registration(email, password, name) {
      return instanceAPI.post(`registration`, { email, password, name })
   },
   login(email, password) {
      return instanceAPI.post(`login`, { email, password})
   },
   checkAuth() {
      return instanceAPI.get(`refresh`)
   },
   logout() {
      return instanceAPI.post(`/logout`)
   },
}

export default authAPI


