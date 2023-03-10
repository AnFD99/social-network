import { AuthUserType } from 'models'
import { instanceAPI } from './api'

const authAPI = {
   registration(email: string, password: string, name: string) {
      return instanceAPI.post<AuthUserType>(`registration`, { email, password, name })
   },
   login(email: string, password: string) {
      return instanceAPI.post<AuthUserType>(`login`, { email, password })
   },
   checkAuth() {
      return instanceAPI.get<AuthUserType>(`refresh`)
   },
   logout() {
      return instanceAPI.post(`/logout`)
   },
}

export default authAPI




