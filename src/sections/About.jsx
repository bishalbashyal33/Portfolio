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
      
      <p className="text-gray-700 mb-12 mx-auto">
      Natural phenomena when modeled as events are inherently random and at first glance, it is non-intuitive to think about understanding patterns in such random phenomenon.
      However, Central limit theorem tells us that an aggregation of large random events irrespective of their nature will lead to Gaussian distribution.
      What is seemingly random at a glance, could soon be studied as following a specific pattern, while we as human beings are able to deduce insights from what seemed impossible to me a few years ago.
      <br /><br />
      I believe that we have problems, and there are patterns to exploit, whether through an <b>algorithmic approach in software engineering</b>, learning <b>kernel functions via Neural Networks</b>, trying to predict causality with <b>data science</b>, or leveraging noisy patterns with sensitive <b>risk assessment in Quant</b>.
      We are always looking for patterns.
      <br /><br />
      Patterns are everywhere, so are problems, some more interesting and with more hideous patterns than others.
      I’m more interested in discovering, leveraging and exploiting such patterns to solve challenging and interesting problems with data, AI and fundamental software Engineering.
      If this way of thinking resonates with you/your team’s vision.<b> Feel Free to Reachout. </b> I'm currently open to solving interesting industry challenges starting with Summer 2026 Internships.
      <br /><br />
      I'm a former <b>Physics Olympiad Champion</b>, and have been fortunate enough to have solved complex problems for Millitary-Grade Tracking Systems, scaled applications on cloud, developed AI powered solution that integrated with LLMs, and sensor data, and have gathered numerous national and international awards along the way.
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
