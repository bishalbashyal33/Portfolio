import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Button from '../components/Button';

const About = () => {
  const socialLinks = [
    { Icon: FaGithub, href: 'https://github.com/bishalbashyal33/Portfolio' },
    { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/bishal-bashyal-80a261184/' },
    { Icon: FaInstagram, href: 'https://www.instagram.com/bishalbashyal/' },
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
      
      <p className="text-gray-700 mb-12 mx-auto">
      I’m a current MS CS student(Research Track) advised by Professor Dr. Shayok Chakraborty at <b>Florida State University</b>, Tallahassee Florida. I'm a former <b>Physics Olympiad Champion</b>, and have been fortunate enough to have had the opportunity to solve complex problems for <b>Millitary-Grade Tracking Systems</b>, scaled applications on cloud, developed AI powered solution that integrated with LLMs, and sensor data, and have gathered numerous national and international awards along the way. I'm currently open to solving interesting industry challenges in the domain of data(Quantitative), AI and fundamental software engineering starting with Summer 2026 Internships.
</p>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {profiles.map((text) => (
          <Button key={text} className="text-gray-700 border-gray-300 hover:bg-gray-100 bg-white">{text}</Button>
        ))}
      </div>
    </div>
  );
};
//academic

export default About;
