import { createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState.ts'

const authReducer = createSlice({
   name: 'auth',
   initialState: initialState.auth,
   reducers: {
      setAuthUserData: (state, action) => {
         state.user = action.payload
         state.isAuth = true
      },
      toggleIsAuth: (state, action) => {
         state.isAuth = action.payload
      },
   },
})

const { actions, reducer } = authReducer

export const { setAuthUserData, toggleIsAuth } = actions

export default reducer

