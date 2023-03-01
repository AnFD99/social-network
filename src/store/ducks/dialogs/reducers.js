import { createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState.ts'

const dialogsReducer = createSlice({
   name: 'dialogs',
   initialState: initialState.dialogs,
   reducers: {
   },
})

const { actions, reducer } = dialogsReducer

export const {
} = actions

export default reducer





























