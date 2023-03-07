import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState'
import { AuthUserType } from 'models'

const authReducer = createSlice({
   name: 'auth',
   initialState: initialState.auth,
   reducers: {
      setAuthUserData: (state, action: PayloadAction<AuthUserType>) => {
         state.user = action.payload
         state.isAuth = true
      },
      toggleIsAuth: (state, action: PayloadAction<boolean>) => {
         state.isAuth = action.payload
      },
   },
})

const { actions, reducer } = authReducer

export const { setAuthUserData, toggleIsAuth } = actions

export default reducer


