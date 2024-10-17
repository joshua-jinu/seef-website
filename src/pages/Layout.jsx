import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
      <NavBar/>
      <main className='content'>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout
