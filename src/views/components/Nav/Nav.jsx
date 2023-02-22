import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'
import profileImg from '../../assets/images/person-standing.svg'

const setActive = ({ isActive }) => (isActive ? 'active-link' : '')

const Nav = () => {
   return (
      <nav className={styles.nav}>
         <ul className={styles.nav__list}>
            <li>
               <NavLink to='/profile' className={setActive}>
                  <img src={profileImg} alt='' className={styles.navImg} />
                  Profile
               </NavLink>
            </li>
            <li>
               <NavLink to='/dialogs' className={setActive}>
                  Messages
               </NavLink>
            </li>
            <li>
               <NavLink to='/news' className={setActive}>
                  News
               </NavLink>
            </li>
            <li>
               <NavLink to='/music' className={setActive}>
                  Music
               </NavLink>
            </li>
            <li>
               <NavLink to='/settings' className={setActive}>
                  Settings
               </NavLink>
            </li>
            <li>
               <NavLink to='/users' className={setActive}>
                  Find friends
               </NavLink>
            </li>
         </ul>
      </nav>
   )
}

export default Nav








