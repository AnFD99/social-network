import Button from 'views/components/Button/Button'
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { authOperations, authSelectors } from 'store/ducks/auth'
import logo from '../../assets/images/logo.svg'

const Header = (props) => {
   return (
      <div className={styles.container}>
         <header className={styles.header}>
            <div className={styles.header__logo}>
               <NavLink to='/'>
                  <img className={styles.logo} src={logo} alt='logo' />
               </NavLink>
               <NavLink to='/'>
                  <div className={styles.logo__title}>{props.title}</div>
               </NavLink>
            </div>
            <div className={styles.login}>
               {props.isAuth ? (
                  <div className={styles.info}>
                     <div className={styles.user}>
                        <NavLink to={`/profile/${props.user.id}`}>
                           {props.user.name}
                        </NavLink>
                     </div>
                     <div>
                        <NavLink to='/login'>
                           <Button onClick={props.setLogout}>Logout</Button>
                        </NavLink>
                     </div>
                  </div>
               ) : (
                  <div className={styles.info}>
                     <NavLink to='/login' className={styles.link}>
                        <Button>Sign in</Button>
                     </NavLink>
                     <NavLink to='/register'>
                        <Button>Sign up</Button>
                     </NavLink>
                  </div>
               )}
            </div>
         </header>
      </div>
   )
}

let mapStateToProps = (state) => ({
   title: 'AnFD Social',
   isAuth: authSelectors.getIsAuth(state),
   user: authSelectors.getAuthUser(state),
})

let mapDispatchToProps = {
   setLogout: authOperations.setLogout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

