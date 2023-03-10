import {
   followSuccess,
   unfollowSuccess,
   setUsers,
   // toggleFollowingProgress,
} from './reducers'
import { usersAPI } from '../../services'
import { loadingOperations } from '../loading'
import { paginationOperations } from '../pagination'
import { ThunkActionType } from 'models'

export const getUsers = (currentPage: number, pageSize: number): ThunkActionType => {
   return async (dispatch) => {
      dispatch(loadingOperations.toggleUsersLoading(true))
      try {
         let response = await usersAPI.getUsersList(currentPage, pageSize)
         dispatch(setUsers(response.data.docs))
         dispatch(paginationOperations.setCurrentPage(currentPage))
         dispatch(
            paginationOperations.setTotalUsersCount(response.data.totalDocs),
         )
      } catch (error) {
         console.log(error)
      } finally {
         dispatch(loadingOperations.toggleUsersLoading(false))
      }
   }
}

// Follow unfollow functon
const followUnfollowFlow = async (
   dispatch: any,
   userId: number | string,
   apiMethod: any,
   actionCreator: any,
) => {
   // dispatch(toggleFollowingProgress(true, userId))

   let response = await apiMethod(userId)
   if (response.status === 200) {
      dispatch(actionCreator(userId))
      // dispatch(toggleFollowingProgress(false, userId))
   }
}

export const follow = (id: string | number): ThunkActionType => {
   return async (dispatch) => {
      let apiMethod = usersAPI.setFollow.bind(usersAPI)
      let actionCreator = followSuccess

      followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
   }
}

export const unfollow = (id: string | number): ThunkActionType => {
   return async (dispatch) => {
      let apiMethod = usersAPI.setUnfollow.bind(usersAPI)
      let actionCreator = unfollowSuccess

      followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
   }
}

export { followSuccess, unfollowSuccess, setUsers }



