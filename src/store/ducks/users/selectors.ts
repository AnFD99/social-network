import { AppStateType } from "store/store"

export const getUsersList = (state: AppStateType) => {
   return state.users.usersList
}

export const getFollowingInProgress = (state: AppStateType) => {
   return state.users.followingInProgress

}