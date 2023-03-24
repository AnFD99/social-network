import { AppStateType } from "store/store"

export const getProfileId = (state: AppStateType) => {
   return state.profile.id
}
export const getProfileName = (state: AppStateType) => {
   return state.profile.name
}
export const getProfileEmail = (state: AppStateType) => {
   return state.profile.email
}
export const getProfileCover = (state: AppStateType) => {
   return state.profile.photos.coverImage
}
export const getProfileAvatar = (state: AppStateType) => {
   return state.profile.photos.avatarImage
}
export const getProfileStatus = (state: AppStateType) => {
   return state.profile.status
}
export const getProfileLocation = (state: AppStateType) => {
   return state.profile.location
}

















