import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down → Hide navbar
        setVisible(false);
      } else {
        // Scrolling up → Show navbar
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // Add delay for better UX when stopping scroll
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
      className="fixed top-0 left-0 right-0 bg-[#011627] z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="home" smooth={true} duration={500} className="text-white font-bold cursor-pointer">
            Bis<span className="text-[#00A3FF]">hal</span>
          </Link>
          <div className="flex space-x-4">
            {[
              "home", "about", "research", "academia", "projects", "sdgs", "awards", "my-story", "contact"
            ].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-[#00A3FF]"
                className="text-white hover:text-[#00A3FF] transition-colors duration-200 cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
