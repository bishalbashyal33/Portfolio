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
    <div className="max-w-4xl mx-auto px-8 py-16 text-center">
      <div className="flex justify-center space-x-6 mb-12">
        {socialLinks.map(({ Icon, href }, index) => (
          <a
            key={index}
            href={href}
            className="text-gray-700 hover:text-gray-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={24} />
          </a>
        ))}
      </div>
      
      <h2 className="text-4xl font-semibold text-gray-800 mb-8">About Me</h2>
      
      <div className="mb-8">
        <img
          src="https://raw.githubusercontent.com/bishalbashyal33/hostedpublicassets/refs/heads/main/profile.png"
          alt="Profile"
          className="w-36 h-36 rounded-full border-4 border-gray-500 mx-auto bg-gray-800 "
        />
      </div>
      
      <p className="text-gray-700 mb-12  mx-auto  ">
      I'm a Research Engineer and share deep passion and interest in System Development, HCI, Computer Vision, LLM, Statistical modeling, IOT, CG Algorithms, and system architecture optimization especially in case of huge datsets. My Research interests include Human Activity Classification on near-Real-time Video feed data For Theft Detection, Early Medical complexity Detection and behavioral interpolation, Document Image Processing and Automation. Edge Integration of Machine Learning on IOT devices, Field isolation and manipulative confinement for RFID systems, RFID wearables, passive tags, Edge Implementation of HF and UHF RF-technology, inventory visibility and analytics, Modeling, forecasting and analyzing Time-Series data in Sustainability projects, Inclusivitiy, security and Privacy in LLMs, Design Interactions and Rendering Optimizations in CG. 

Besides my academic interests, I am also obliged toward sustainability, addressing UN SDGs locally, training 18k+ students, empowering youth technological innovations, and Student-driven Startups. I have been a guest speaker on Sustainability through Technological Innovations and entrepeneurship, and have garnered multiple Int'l award and nominations for my contribution in these fields.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {profiles.map((text) => (
          <Button key={text} className="text-gray-700 border-gray-300 hover:bg-gray-100">{text}</Button>
        ))}
      </div>
    </div>
  );
};

export default About;
