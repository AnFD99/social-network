import types from './types'

export const followSuccess = (userId) => ({ type: types.FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: types.UNFOLLOW, userId })
export const setUsers = (users) => ({ type: types.SET_USERS, users })
export const setCurrentPage = (page) => ({ type: types.SET_CURRENT_PAGE, page })
export const setTotalUsersCount = (count) => ({
   type: types.SET_TOTAL_USERS_COUNT,
   count,
})
export const toggleIsFetcing = (fetching) => ({
   type: types.TOGGLE_IS_FETCHING,
   fetching,
})
export const toggleFollowingProgress = (fetching, userId) => ({
   type: types.TOGGLE_FOLLOWING_PROGRESS,
   fetching,
   userId,
})

