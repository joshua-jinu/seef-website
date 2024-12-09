import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';
import logo from '../assets/logo-bg.png';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const [visible, setIsVisible] = useState(true); // Navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track scroll position
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const location = useLocation(); // Access the current location
  const currentPath = location.pathname;
  const pages = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Projects", link: "/projects" },
    { title: "Testimonials", link: "/testimonials" },
    // { title: "Updates", link: "/updates" },
    { title: "Collaborations", link: "/collaborations" },
    { title: "Contact", link: "/contact" },
  ];

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <div className='flex flex-row justify-between'>
      {/* Logo Section */}
      <motion.div
        initial={{ y: 0 }}
        animate={visible ? { y: 0 } : { y: -20 }}
        transition={{ type: "tween", duration: 0.5 }}
        className="fixed z-[6000] ml-5 mt-4"
      >
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="w-[130px] hover:scale-105 duration-500" />
        </Link>
      </motion.div>

      {/* Navigation Section */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={visible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ type: "tween", duration: 0.5 }}
        className="fixed z-[5000] max-w-[100vw] bg-white"
      >
        <nav className="flex justify-end items-end px-5 py-4 lg:px-10 shadow-md">
          {/* Burger Menu for Small Screens */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-darkgreen hover:text-lightgreen"
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-row gap-10 lg:text-lg">
            {pages.map((page, idx) => (
              <NavLink
                className={`${
                  currentPath === page.link ? "text-lightgreen" : "text-darkgreen"
                } hover:text-lightgreen duration-500 font-semibold`}
                to={page.link}
                key={idx}
              >
                {page.title}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white shadow-md lg:hidden w-[100vw]"
          >
            <ul className="flex flex-col gap-4 py-4 px-5">
              {pages.map((page, idx) => (
                <li key={idx}>
                  <NavLink
                    className={`${
                      currentPath === page.link ? "text-lightgreen" : "text-darkgreen"
                    } hover:text-lightgreen duration-500 font-semibold`}
                    to={page.link}
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  >
                    {page.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default NavBar;