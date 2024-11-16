import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/home.css'

function HomeAbout() {
  return (
    <section className='about-components'>
        <div className='about-overlay'>
            <div className='left'>
                <h2 className='home-subhead'>Overview</h2>
                <br />
                <p className='about-para'>
                    Sustainable Environment Educational
                    Foundation (SEEF) was established in 2022
                    by alumni of St. Joseph's Boys' High School
                    (SJBHS) who had a vision to empower
                    today's youth to lead the way toward a
                    better and more sustainable future. SEEF’s
                    initial work revolved around developing and
                    implementing farm-based projects at a
                    model farm on the outskirts of Bangalore.
                </p>
            </div>
            <div className='right'>
                <br />
                <p className='about-para'>
                    As SEEF continues to evolve, we remain
                    committed to its core mission of
                    empowering youth and fostering
                    sustainable solutions Our current focus
                    areas—such as algal farming, sustainable
                    menstruation, and nutrition—reflect our
                    commitment to addressing both
                    environmental and social challenges. By
                    providing opportunities for experiential
                    learning and fostering meaningful
                    partnerships, SEEF is dedicated to building
                    a more sustainable and equitable future. 
                </p>
                <button className='std-btn'>
                    <Link to='/about'>About Us</Link>
                </button>
            </div>
        </div>
    </section>
  )
}

export default HomeAbout
