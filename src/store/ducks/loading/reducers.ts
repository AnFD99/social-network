import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState'

const loadingReducer = createSlice({
   name: 'loading',
   initialState: initialState.loading,
   reducers: {
      toggleAuthLoading: (state, action: PayloadAction<boolean>) => {
         state.authLoading = action.payload
      },
      toggleProfileLoading: (state, action: PayloadAction<boolean>) => {
         state.profileLoading = action.payload
      },
      toggleDialogsLoading: (state, action: PayloadAction<boolean>) => {
         state.dialogsLoading = action.payload
      },
      toggleUsersLoading: (state, action: PayloadAction<boolean>) => {
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








