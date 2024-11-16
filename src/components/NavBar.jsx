import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/style.css'
import logo from '../assets/logo-bg.png'

function NavBar() {
  return (
    <nav>
        <div className='logo'>
            <img src={logo} alt="Logo" />
        </div>
        <div>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
            <NavLink className="nav-link" to="/testimonials">Testimonials</NavLink>
            <NavLink className="nav-link" to="/updates">Updates</NavLink>
            <NavLink className="nav-link" to="/collaborations">Collaborations</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </div>
    </nav>
  )
}

export default NavBar
