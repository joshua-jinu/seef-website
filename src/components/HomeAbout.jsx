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
                <p className='about-para text-neutral'>
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
                <p className='about-para text-neutral'>
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
                <Link to='/about' className='py-3 px-6 rounded-3xl text-darkgreen bg-neutral hover:text-lightgreen hover:bg-darkgreen duration-300'>
                        <span className='text-lg font-bold'>About Us</span>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default HomeAbout
