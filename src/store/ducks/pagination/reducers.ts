import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState'

const paginationReducer = createSlice({
   name: 'pagination',
   initialState: initialState.pagination,
   reducers: {
      setCurrentPage: (state, action: PayloadAction<number>) => {
         state.currentPage = action.payload
      },
      setTotalUsersCount: (state, action: PayloadAction<number>) => {
         state.totalUsersCount = action.payload
      },
   },
})

const { actions, reducer } = paginationReducer

export const { setCurrentPage, setTotalUsersCount } = actions

export default reducer



