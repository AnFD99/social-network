import React from 'react'
import '../../App.css'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header.jsx'
import Nav from './Nav/Nav.jsx'

const Layout = () => {
   return (
      <div>
         <Header />
         <div className='app-wrapper'>
            <Nav />
            <div className='app-wrapper-content'>
               <Outlet />
            </div>
         </div>
      </div>
   )
}

export default Layout

