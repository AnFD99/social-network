import { AppStateType } from "store/store"

export const getIsAuth = (state: AppStateType) => {
   return state.auth.isAuth
}

export const getAuthUser = (state: AppStateType) => {
   return state.auth.user
}

export const getAuthUserId = (state: AppStateType) => {
   return state.auth.user.id

}