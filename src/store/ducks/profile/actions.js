import types from './types'

export const addPost = (postText) => ({ type: types.ADD_POST, postText })
export const deletePost = (postId) => ({ type: types.DELETE_POST, postId })
export const setUserProfile = (profile) => ({
   type: types.SET_USER_PROFILE,
   profile,
})
export const setUserStatus = (status) => ({
   type: types.SET_USER_STATUS,
   status,
})
export const setUserPhoto = (photo) => ({
   type: types.SET_USER_PHOTO,
   photo,
})



