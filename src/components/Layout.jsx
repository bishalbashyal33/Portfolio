import React from 'react';
import Navbar from '../components/Navbar';
import UnderConstructionBanner from '../components/UnderConstructionBanner';
import Footer from '../sections/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-white">
      <header className="fixed top-0 left-0 right-0 z-50">
        <UnderConstructionBanner />
        <Navbar />
      </header>

      <main className="relative">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;