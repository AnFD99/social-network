export const getPageSize = (state) => {
   return state.pagination.pageSize
}

export const getPageNumber = (state) => {
   return state.pagination.currentPage
}

export const getUsersCount = (state) => {
   return state.pagination.totalUsersCount
}


