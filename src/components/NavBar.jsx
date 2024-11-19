import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/style.css'
import logo from '../assets/logo-bg.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function NavBar() {
  const [visible, setIsVisible] = useState(true); // Navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track scroll position
  const pages = [
    {
      title: "Home",
      link : "/"
    },
    {
      title: "About",
      link : "/about"
    },
    {
      title: "Projects",
      link : "/projects"
    },
    {
      title: "Testimonials",
      link : "/testimonials"
    },
    {
      title: "Updates",
      link : "/updates"
    },
    {
      title: "Collaborations",
      link : "/collaborations"
    },
    {
      title: "Contact",
      link : "/contact"
    }
  ]

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Hide navbar when scrolling down
        setIsVisible(false);
      } else {
        // Show navbar when scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;

    // If the sum of scrollY and window height equals or exceeds the document height, we are at the bottom
    if (scrollY + windowHeight >= documentHeight - 1) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
      };
    }
  }, [lastScrollY]);

  return (
    <div>
      <motion.div 
      initial={{
        y:0
      }}
      animate={visible ? {
        y:0
      }:{
        y:-20
      }}
      transition={{
        type: "tween",
        duration: 0.5
      }}
      className=' fixed z-[6000] ml-5 mt-5'>
        <Link className='' to={"/"}>
          <img src={logo} alt="Logo" className='size-[150px] hover:scale-105 duration-500'/>
        </Link>
      </motion.div>
      <motion.div
      initial={{
        y:0,
        opacity:1
      }}
      animate={visible ? {
        y:0,
        opacity:1
      } : {
        y:-100,
        opacity: 0
      }}
      transition={{
        type: "tween",
        duration: 0.5
      }}
      className='fixed z-[5000]'
      >
        <nav className='justify-end'>
          
          <div>
            {pages.map((page, idx) => (
              <NavLink className="nav-link" to={`${page.link}`} key={idx}>{page.title}</NavLink>
            ))}
          </div>
        </nav>
      </motion.div>
    </div>
    
  )
}

export default NavBar
