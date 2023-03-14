// import { AuthUserType } from 'models'
import { instanceAPI } from './api'

const authAPI = {
   registration(email: string, password: string, name: string) {
      return instanceAPI.post(`registration`, { email, password, name })
   },
   login(email: string, password: string) {
      return instanceAPI.post(`login`, { email, password })
   },
   checkAuth() {
      return instanceAPI.get(`refresh`)
   },
   logout() {
      return instanceAPI.post(`/logout`)
   },
}

export default authAPI




