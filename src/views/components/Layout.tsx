import React from 'react'
import '../../App.css'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Nav from './Nav/Nav'

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

