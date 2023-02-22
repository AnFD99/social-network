import { authAPI } from '../../services'
import { loadingOperations } from '../loading'
import { toggleIsAuth, setAuthUserData } from './reducers'

export const checkAuth = () => {
   return async (dispatch) => {
      dispatch(loadingOperations.toggleAuthLoading(true))
      try {
         const response = await authAPI.checkAuth()

         localStorage.setItem('token', response.data.accessToken)
         dispatch(setAuthUserData(response.data.user))
      } catch (err) {
         console.log(err)
      } finally {
         dispatch(loadingOperations.toggleAuthLoading(false))
      }
   }
}

export const getLogin = (email, password) => {
   return async (dispatch) => {
      try {
         const response = await authAPI.login(email, password)
         localStorage.setItem('token', response.data.accessToken)
         dispatch(setAuthUserData(response.data.user))
      } catch (err) {
         console.log(err)
      }
   }
}

export const getRegistration = (email, password, name) => {
   return async (dispatch) => {
      try {
         const response = await authAPI.registration(email, password, name)
         localStorage.setItem('token', response.data.accessToken)
         dispatch(setAuthUserData(response.data.user))
      } catch (err) {
         console.log(err)
      }
   }
}

export const setLogout = () => {
   return async (dispatch) => {
      dispatch(loadingOperations.toggleAuthLoading(true))
      try {
         await authAPI.logout()
         dispatch(toggleIsAuth(false))
         localStorage.removeItem('token')
      } catch (error) {
      } finally {
         dispatch(loadingOperations.toggleAuthLoading(false))
      }
   }
}

export { setAuthUserData, toggleIsAuth }





