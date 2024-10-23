import React from 'react'
import {NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'


function Footer() {
  return (
    <footer>
        <div className='logo footer-section'>
            <img src={logo} alt="Logo" />
        </div>
        <div className='links footer-section'>
            <NavLink className="footer-link" to="/">Home</NavLink>
            <NavLink className="footer-link" to="/about">About</NavLink>
            <NavLink className="footer-link" to="/projects">Projects</NavLink>
            <NavLink className="footer-link" to="/testimonials">Testimonials</NavLink>
            <NavLink className="footer-link" to="/updates">Updates</NavLink>
            <NavLink className="footer-link" to="/collaborations">Collaborations</NavLink>
            <NavLink className="footer-link" to="/contact">Contact</NavLink>
        </div>
        <div className='newsletter-join footer-section'>
          <a href="">
            <span>
            Stay Updated on All Our Activities, Click Here Join Our Newsletter Now!
            </span>
          </a>
        </div>
        <div className='rights footer-section'>
          <h4>
          ©2024 SEEF | 
          <a href="https://sjbhsoba.net/" style={{color:"white", textDecoration:"none"}}>
          SJBHS OBA
          </a>
           | All Rights Reserved
          </h4>
        </div>
    </footer>
  )
}

export default Footer
