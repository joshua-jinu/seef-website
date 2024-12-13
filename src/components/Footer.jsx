import React from 'react'
import {NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'


function Footer() {
  return (
    <footer>
        <div className='logo footer-section flex justify-center items-center'>
            <img src={logo} alt="Logo" />
        </div>
        <div className='links footer-section flex flex-wrap justify-center items-center'>
            <NavLink className="footer-link" to="/">Home</NavLink>
            <NavLink className="footer-link" to="/about">About</NavLink>
            <NavLink className="footer-link" to="/projects">Projects</NavLink>
            <NavLink className="footer-link" to="/testimonials">Testimonials</NavLink>
            {/* <NavLink className="footer-link" to="/updates">Updates</NavLink> */}
            <NavLink className="footer-link" to="/collaborations">Collaborations</NavLink>
            <NavLink className="footer-link" to="/contact">Contact</NavLink>
        </div>
        <div className='newsletter-join footer-section text-white'>
          <i>
            <span>
            Website Developed by Joshua Jinu | David Jijo | Roshan Pramod
            <br />
            Pratheek Ravikumar | Anbar Althaf
            </span>
          </i>
        </div>
        <div className='rights footer-section'>
          <h4>
          ©2024 SEEF Foundation | All Rights Reserved
          </h4>
        </div>
    </footer>
  )
}

export default Footer
