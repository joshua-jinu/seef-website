import React, {useEffect} from 'react'
import HomeAbout from '../components/HomeAbout'
import Hero from '../components/hero'
import Projects from '../components/Project'
import CTA from '../components/CTA'
import Donate from '../components/Donate'

function Home() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])


  return (
    <div className=''>
      <Hero />
      <HomeAbout />
      <Donate/>
      <Projects />
      <CTA />
    </div>
  )
}

export default Home
