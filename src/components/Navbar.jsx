import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY === 0) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setVisible(true), 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -50, opacity: visible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      className="fixed top-10 left-0 right-0 bg-white z-50 shadow-sm border-b border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="home" smooth={true} duration={500} className="text-black font-bold text-xl cursor-pointer">
            Bishal
          </Link>
          <div className="flex items-center space-x-6 hidden md:flex">
            {["home", "about", "research", "academia", "projects", "sdgs", "awards", "my-story", "contact"].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-black font-semibold"
                className="text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md py-4 space-y-4">
          {["home", "about", "research", "academia", "projects", "sdgs", "awards", "my-story", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-black font-semibold"
              className="text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
