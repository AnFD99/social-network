import React, { FC, Suspense } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './views/components/Layout.jsx'
import RequireAuth from 'views/hoc/RequireAuth'
import { connect } from 'react-redux'
import Preloader from 'views/components/Preloader/Preloader'
import { useEffect } from 'react'
import { authOperations, authSelectors } from 'store/ducks/auth'
import { loadingSelectors } from 'store/ducks/loading'
import { AppStateType } from 'store/store'
import { AuthUserType } from 'models'

const Homepage = React.lazy(() => import('./views/pages/Homepage/Homepage'))
const Dialogspage = React.lazy(
   () => import('./views/pages/Dialogspage/Dialogspage'),
)
const Profilepage = React.lazy(
   () => import('./views/pages/Profilepage/Profilepage'),
)
const Loginpage = React.lazy(() => import('./views/pages/Loginpage/Loginpage'))
const Registerpage = React.lazy(
   () => import('./views/pages/Registerpage/Registerpage'),
)
const Userspage = React.lazy(() => import('./views/pages/Userspage/Userspage'))
const Newspage = React.lazy(() => import('./views/pages/Newspage/Newspage'))
const NotFound = React.lazy(() => import('./views/pages/NotFound/NotFound'))

type MapStateType = {
   isLoading: boolean
   isAuth: boolean
   authUser: AuthUserType
}
type MapDispatchType = {
   checkAuth: () => void
}
type PropsType = MapStateType & MapDispatchType

const App: FC<PropsType> = (props) => {
   useEffect(() => {
      if (localStorage.getItem('token')) {
         props.checkAuth()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <>
         {props.isLoading ? (
            <Preloader />
         ) : (
            <Routes>
               <Route path='/' element={<Layout />}>
                  <Route
                     index
                     element={
                        <Suspense fallback={<Preloader />}>
                           <Homepage />
                        </Suspense>
                     }
                  />
                  <Route
                     path='dialogs'
                     element={
                        <RequireAuth>
                           <Suspense fallback={<Preloader />}>
                              <Dialogspage />
                           </Suspense>
                        </RequireAuth>
                     }
                  />

                  <Route path='profile'>
                     <Route
                        index
                        element={
                           <RequireAuth>
                              {props.isAuth ? (
                                 <Navigate
                                    to={'/profile/' + props.authUser.id}
                                 />
                              ) : null}
                           </RequireAuth>
                        }
                     />
                     <Route
                        path=':id'
                        element={
                           <RequireAuth>
                              <Suspense fallback={<Preloader />}>
                                 <Profilepage />
                              </Suspense>
                           </RequireAuth>
                        }
                     />
                  </Route>

                  <Route
                     path='news'
                     element={
                        <Suspense fallback={<Preloader />}>
                           <Newspage />
                        </Suspense>
                     }
                  />
                  <Route
                     path='users'
                     element={
                        <RequireAuth>
                           <Suspense fallback={<Preloader />}>
                              <Userspage />
                           </Suspense>
                        </RequireAuth>
                     }
                  />
                  <Route
                     path='login'
                     element={
                        <Suspense fallback={<Preloader />}>
                           <Loginpage />
                        </Suspense>
                     }
                  />
                  <Route
                     path='register'
                     element={
                        <Suspense fallback={<Preloader />}>
                           <Registerpage />
                        </Suspense>
                     }
                  />
                  <Route
                     path='*'
                     element={
                        <Suspense fallback={<Preloader />}>
                           <NotFound />
                        </Suspense>
                     }
                  />
               </Route>
            </Routes>
         )}
      </>
   )
}

let mapStateToProps = (state: AppStateType): MapStateType => ({
   isLoading: loadingSelectors.getAuthLoading(state),
   isAuth: authSelectors.getIsAuth(state),
   authUser: authSelectors.getAuthUser(state),
})
let mapDispatchToProps: MapDispatchType = {
   checkAuth: authOperations.checkAuth,
}

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(
   mapStateToProps,
   mapDispatchToProps,
)(App)

