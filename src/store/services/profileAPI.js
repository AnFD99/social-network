import { instanceAPI } from './api'

const profileAPI = {
   async getProfile(id) {
      const response = await instanceAPI.get(`profile/${id}`)
      return response
   },
   async updateStatus(id, status) {
      const response = await instanceAPI.post(`profile/status/${id}`, {
         status,
      })

      return response.data[0].status
   },
   async uploadPhoto(id, photo) {
      const response = await instanceAPI.post(`profile/uploadCover/${id}`, {
         photo,
      })
      return response.data.coverImage
   },
}

export default profileAPI

