import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Professional from './pages/Professional';
import Academia from './pages/Academia';
import Projects from './pages/Projects';
import SDGs from './pages/SDGs';
import MyStory from './pages/MyStory';
import Contact from './pages/Contact';
import Awards from './pages/Awards';

// Create a wrapper component for sections
const Section = ({ name, children, alternate = false }) => {
  return (
    <Element
      name={name}
      className={`min-h-screen flex items-center justify-center ${
        alternate ? 'bg-[#011627]' : 'bg-[#01223b]'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {children}
      </div>
    </Element>
  );
};

const App = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <main className="relative">
        <Section name="home" alternate>
          <Home />
        </Section>

        <Section name="about">
          <About />
        </Section>

        <Section name="research" alternate>
          <Research />
        </Section>

        <Section name="professional">
          <Professional />
        </Section>

        <Section name="academia" alternate>
          <Academia />
        </Section>

        <Section name="projects">
          <Projects />
        </Section>

        <Section name="sdgs" alternate>
          <SDGs />
        </Section>

        <Section name="awards">
          <Awards />
        </Section>

        <Section name="my-story" alternate>
          <MyStory />
        </Section>

        <Section name="contact">
          <Contact />
        </Section>
      </main>

      <footer className="w-full bg-[#011627] py-8 text-center">
        <p className="text-[#00A3FF] text-sm">Copyright All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;