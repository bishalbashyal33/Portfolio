import React from 'react';
import Navbar from '../components/Navbar';
import UnderConstructionBanner from '../components/UnderConstructionBanner';
import Footer from '../sections/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-white">
      {/* Wrap Navbar inside a container */}
      <div className="w-[70%] mx-auto">
        <UnderConstructionBanner />
        <Navbar />
      </div>
      
      <main className="relative">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;