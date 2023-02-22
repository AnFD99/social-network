import types from './types'

export const setUserData = (user) => ({
   type: types.SET_USER_DATA,
   user,
})

export const logout = () => ({
   type: types.LOGOUT,
})

export const setLoading = (loading) => ({
   type: types.SET_IS_LOADING,
   loading,
})






