import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Collaborations from './pages/Collaborations'
import Testimonials from './pages/Testimonials'
import Updates from './pages/Updates'
import Contact from './pages/Contact'
import Layout from './pages/Layout'

function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/projects' element={<Projects/>}/>
        <Route  path='/collaborations' element={<Collaborations/>}/>
        <Route  path='/testimonials' element={<Testimonials/>}/>
        <Route  path='/updates' element={<Updates/>}/>
        <Route  path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
  )
}

export default App
