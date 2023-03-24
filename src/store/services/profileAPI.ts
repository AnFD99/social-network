import { UserType } from 'models'
import { instanceAPI } from './api'

const profileAPI = {
   async getProfile(id: string | number) {
      const response = await instanceAPI.get<any>(`profile/${id}`)
      return response
   },
   async updateStatus(id: string | number, status: string) {
      const response = await instanceAPI.post<any>(`profile/status/${id}`, {
         status,
      })

      return response.data[0].status
   },
   async uploadPhoto(id: string | number, photo: string) {
      const response = await instanceAPI.post<any>(`profile/uploadCover/${id}`, {
         photo,
      })
      return response.data.coverImage
   },
}

export default profileAPI

