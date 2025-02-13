import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Always show navbar at the top of the page
      if (currentScrollPos === 0) {
        setVisible(true);
        setPrevScrollPos(currentScrollPos);
        return;
      }

      // Show/hide based on scroll direction
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 70);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 bg-[#011627] z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="home" smooth={true} duration={500} className="text-white font-bold">
          Bis<span className="text-[#00A3FF]">hal</span>
          </Link>
          <div className="flex space-x-4">
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              spy={true}
              activeClass="text-[#00A3FF]"
              className="text-white hover:text-[#00A3FF] transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="about" 
              smooth={true} 
              duration={500}
              spy={true}
              activeClass="text-[#00A3FF]"
              className="text-white hover:text-[#00A3FF] transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="research" 
              smooth={true} 
              duration={500}
              spy={true}
              activeClass="text-[#00A3FF]"
              className="text-white hover:text-[#00A3FF] transition-colors duration-200"
            >
              Research
            </Link>
            <Link 
              to="academia" 
              smooth={true} 
              duration={500}
              spy={true}
              activeClass="text-[#00A3FF]"
              className="text-white hover:text-[#00A3FF] transition-colors duration-200"
            >
              Academia
            </Link>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500}
              spy={true}
              activeClass="text-[#00A3FF]"
              className="text-white hover:text-[#00A3FF] transition-colors duration-200"
            >
              Projects
            </Link>
            <Link 
              to="sdgs" 
              smooth={true} 
              duration={500}
              spy={true}
              activeClass="text-[#00A3FF]"
              className="text-white hover:text-[#00A3FF] transition-colors duration-200"
            >
              SDGs
            </Link>
            <Link 
              to="awards" 
              smooth={true} 
              duration={500}
              spy={true}
              activeClass="text-[#00A3FF]"
              className="text-white hover:text-[#00A3FF] transition-colors duration-200"
            >
              Awards
            </Link>
            <Link 
              to="my-story" 
              smooth={true} 
              duration={500}
              spy={true}
              activeClass="text-[#00A3FF]"
              className="text-white hover:text-[#00A3FF] transition-colors duration-200"
            >
              My Story
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              spy={true}
              activeClass="text-[#00A3FF]"
              className="text-white hover:text-[#00A3FF] transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;