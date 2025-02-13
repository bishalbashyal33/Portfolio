import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Button from '../components/Button';

const About = () => {
  const socialLinks = [
    { Icon: FaGithub, href: '#' },
    { Icon: FaLinkedin, href: '#' },
    { Icon: FaInstagram, href: '#' },
  ];

  const profiles = [
    'Academic Profile',
    'Research Profile',
    'Professional Profile',
    'My Story'
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <div className="flex justify-center space-x-4 mb-12">
        {socialLinks.map(({ Icon, href }, index) => (
          <a
            key={index}
            href={href}
            className="text-[#00A3FF] hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={24} />
          </a>
        ))}
      </div>
      
      <h2 className="text-4xl font-bold text-[#00A3FF] mb-8">About Me</h2>
      
      <div className="mb-8">
        <img
          src="/api/placeholder/150/150"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-[#00A3FF] mx-auto"
        />
      </div>
      
      <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {profiles.map((text) => (
          <Button key={text}>{text}</Button>
        ))}
      </div>
    </div>
  );
};

export default About;
