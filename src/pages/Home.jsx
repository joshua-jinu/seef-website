import React from 'react'
import HomeAbout from '../components/HomeAbout'
import Hero from '../components/hero'
import Projects from '../components/Projects'
import CTA from '../components/CTA'

function Home() {
  return (
    <div className=''>
      <Hero/>
      <HomeAbout/>
      <Projects/>
      <CTA />
    </div>
  )
}

export default Home
