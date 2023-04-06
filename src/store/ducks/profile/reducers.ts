import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState'
import { LocationType } from 'models'

const profileReducer = createSlice({
   name: 'profile',
   initialState: initialState.profile,
   reducers: {
      setProfileId: (state, action: PayloadAction<string>) => {
         state.id = action.payload
      },
      setProfileName: (state, action: PayloadAction<string>) => {
         state.name = action.payload
      },
      setProfileEmail: (state, action: PayloadAction<string>) => {
         state.email = action.payload
      },
      setProfileCover: (state, action: PayloadAction<string>) => {
         state.photos.coverImage = action.payload
      },
      setProfileAvatar: (state, action: PayloadAction<string>) => {
         state.photos.avatarImage = action.payload
      },
      setProfileLocation: (state, action: PayloadAction<LocationType>) => {
         state.location = action.payload
      },
      setProfileStatus: (state, action: PayloadAction<string>) => {
         state.status = action.payload
      },
   },
})

// const profileReducer = (state = initialState, action) => {
//    switch (action.type) {
//       case types.ADD_POST:
//          let newPost = {
//             id: 3,
//             message: action.postText,
//          }
//          return {
//             ...state,
//             postsData: [...state.postsData, newPost],
//          }
//       case types.SET_USER_PROFILE:
//          return { ...state, profile: action.profile }
//       case types.SET_USER_STATUS:
//          return { ...state, status: action.status }
//       case types.SET_USER_PHOTO:
//          return {
//             ...state,
//             profile: {
//                ...state.profile,
//                profile: {
//                   ...state.profile,
//                   coverImage: action.photo,
//                },
//             },
//          }
//       case types.DELETE_POST: {
//          return {
//             ...state,
//             postsData: state.postsData.filter((p) => p.id !== action.postId),
//          }
//       }
//       default:
//          return state
//    }
// }

const { actions, reducer } = profileReducer

export const {
   setProfileId,
   setProfileName,
   setProfileEmail,
   setProfileCover,
   setProfileAvatar,
   setProfileLocation,
   setProfileStatus,
} = actions

export default reducer

































