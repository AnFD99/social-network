import { AppStateType } from "store/store"

export const getAuthLoading = (state: AppStateType) => {
   return state.loading.authLoading
}

export const getProfileLoading = (state: AppStateType) => {
   return state.loading.profileLoading
}

export const getDialogsLoading = (state: AppStateType) => {
   return state.loading.authLoading
}

export const getUsersLoading = (state: AppStateType) => {
   return state.loading.usersLoading
}







