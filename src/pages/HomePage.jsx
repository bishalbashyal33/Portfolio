import React from 'react';
import Home from '../sections/Home';
import About from '../sections/About';
import Research from '../sections/Research';
import Professional from '../sections/Professional';
import Academia from '../sections/Academia';
import Projects from '../sections/Projects';
import SDGs from '../sections/SDGs';
import MyStory from '../sections/MyStory';
import Contact from '../sections/Contact';
import Awards from '../sections/Awards';

// Create a wrapper component for sections
const Section = ({ name, children, alternate = false }) => {
  return (
    <div
      id={name}
      className={`min-h-screen flex items-center justify-center ${
        alternate ? 'bg-[#ffffff]' : 'bg-[#f3f3f3]'
      }`}
    >
      <div className="w-[70%] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {children}
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
