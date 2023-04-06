import { instanceAPI } from './api'
import { IPhotoResponse, IProfileResponse, IStatusResponse } from './apiResponse.interface'

const profileAPI = {
   async getProfile(id: string) {
      const response = await instanceAPI.get<IProfileResponse>(`profile/${id}`)
      return response
   },
   async updateStatus(id: string, status: string) {
      const response = await instanceAPI.post<IStatusResponse>(`profile/status/${id}`, {
         status,
      })

      return response.data[0].status
   },
   async uploadPhoto(id: string, photo: string) {
      const response = await instanceAPI.post<IPhotoResponse>(
         `profile/uploadCover/${id}`,
         {
            photo,
         },
      )
      return response.data.coverImage
   },
}

export default profileAPI

