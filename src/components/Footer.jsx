import React from 'react'
import {NavLink } from 'react-router-dom'


function Footer() {
  return (
    <footer>
        <div className='links'>
            <NavLink className="footer-link" to="/">Home</NavLink>
            <NavLink className="footer-link" to="/about">About</NavLink>
            <NavLink className="footer-link" to="/projects">Projects</NavLink>
            <NavLink className="footer-link" to="/testimonials">Testimonials</NavLink>
            <NavLink className="footer-link" to="/updates">Updates</NavLink>
            <NavLink className="footer-link" to="/collaborations">Collaborations</NavLink>
            <NavLink className="footer-link" to="/contact">Contact</NavLink>
        </div>
    </footer>
  )
}

export default Footer
