import { AppStateType } from "store/store"

export const getPageSize = (state: AppStateType) => {
   return state.pagination.pageSize
}

export const getPageNumber = (state: AppStateType) => {
   return state.pagination.currentPage
}

export const getUsersCount = (state: AppStateType) => {
   return state.pagination.totalUsersCount
}




