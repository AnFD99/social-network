import { createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState.ts'

const paginationReducer = createSlice({
   name: 'pagination',
   initialState: initialState.pagination,
   reducers: {
      setCurrentPage: (state, action) => {
         state.currentPage = action.payload
      },
      setTotalUsersCount: (state, action) => {
         state.totalUsersCount = action.payload
      },
   },
})

const { actions, reducer } = paginationReducer

export const { setCurrentPage, setTotalUsersCount } = actions

export default reducer

