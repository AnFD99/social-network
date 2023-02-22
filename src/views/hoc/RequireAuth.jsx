import { connect } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import { authSelectors } from 'store/ducks/auth'

const RequireAuth = ({ children, ...props }) => {
   const location = useLocation()

   if (!props.isAuth) {
      return <Navigate to='/login' state={{ from: location }} />
   }

   return children
}

let mapStateToProps = (state) => ({
   isAuth: authSelectors.getIsAuth(state),
})

export default connect(mapStateToProps)(RequireAuth)



