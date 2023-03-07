import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState'

const postsReducer = createSlice({
   name: 'posts',
   initialState: initialState.posts,
   reducers: {
      addPost: (state, action: PayloadAction<string>) => {
         let newPost = {
            id: 3,
            post: action.payload,
         }
         state.push(newPost)
      },
      deletePost: (state, action: PayloadAction<number>) => {
         state.filter((p) => p.id !== action.payload)
      },
   },
})

const { actions, reducer } = postsReducer

export const {
   addPost,
   deletePost,
} = actions

export default reducer





























