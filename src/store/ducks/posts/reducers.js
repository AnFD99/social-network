import { createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState'

const postsReducer = createSlice({
   name: 'posts',
   initialState: initialState.posts,
   reducers: {
      addPost: (state, action) => {
         let newPost = {
            id: 3,
            message: action.payload,
         }
         state.push(newPost)
      },
      deletePost: (state, action) => {
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



























