import React, {useEffect} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])


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
