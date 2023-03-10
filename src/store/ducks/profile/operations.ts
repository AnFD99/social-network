import { ThunkActionType } from 'models'
import { profileAPI } from '../../services'
import { loadingOperations } from '../loading'
import {
   setProfileId,
   setProfileStatus,
   setProfileName,
   setProfileEmail,
   setProfileCover,
   setProfileAvatar,
   setProfileLocation,
} from './reducers'

export const getProfile = (id: number | string): ThunkActionType => {
   return async (dispatch) => {
      dispatch(loadingOperations.toggleProfileLoading(true))
      try {
         let response = await profileAPI.getProfile(id)

         dispatch(setProfileId(response.data._id))
         dispatch(setProfileName(response.data.name))
         dispatch(setProfileEmail(response.data.email))
         dispatch(setProfileCover(response.data.coverImage))
         dispatch(setProfileAvatar(response.data.avatarImage))
         dispatch(setProfileLocation(response.data.location))
         dispatch(setProfileStatus(response.data.status))
      } catch (err) {
         console.log(err)
      } finally {
         dispatch(loadingOperations.toggleProfileLoading(false))
      }
   }
}

export const updateStatus = (id: number | string, status: string): ThunkActionType => {
   return async (dispatch) => {
      let response = await profileAPI.updateStatus(id, status)

      dispatch(setProfileStatus(response))
   }
}

export const getPhoto = (id: number | string, photo: string): ThunkActionType => {
   return async (dispatch) => {
      dispatch(loadingOperations.toggleProfileLoading(true))
      try {
         await profileAPI.uploadPhoto(id, photo)
         dispatch(getProfile(id))
      } catch (error) {
         console.log(error)
      } finally {
         dispatch(loadingOperations.toggleProfileLoading(false))
      }
   }
}

export {
   setProfileId,
   setProfileStatus,
   setProfileName,
   setProfileEmail,
   setProfileCover,
   setProfileAvatar,
   setProfileLocation,
}























