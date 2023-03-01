import { createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState.ts'

const messageReducer = createSlice({
   name: 'messages',
   initialState: initialState.messages,
   reducers: {
      sendMessage: (state, action) => {
         let newMessage = {
            id: 4,
            message: action.payload,
         }
         state.push(newMessage)
      },
   },
})

const { actions, reducer } = messageReducer

export const { sendMessage } = actions

export default reducer

