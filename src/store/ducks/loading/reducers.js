import { createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState.ts'

const loadingReducer = createSlice({
   name: 'loading',
   initialState: initialState.loading,
   reducers: {
      toggleAuthLoading: (state, action) => {
         state.authLoading = action.payload
      },
      toggleProfileLoading: (state, action) => {
         state.profileLoading = action.payload
      },
      toggleDialogsLoading: (state, action) => {
         state.dialogsLoading = action.payload
      },
      toggleUsersLoading: (state, action) => {
         state.usersLoading = action.payload
      },
   },
})

const { actions, reducer } = loadingReducer

export const {
   toggleAuthLoading,
   toggleProfileLoading,
   toggleDialogsLoading,
   toggleUsersLoading,
} = actions

export default reducer




