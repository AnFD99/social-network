export const getIsAuth = (state) => {
   return state.auth.isAuth
}

export const getAuthUser = (state) => {
   return state.auth.user
}

export const getAuthUserId = (state) => {
   return state.auth.user.id
}