import { TypeAnimation } from 'react-type-animation';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">
            Hi, I'm <span className="text-[#00A3FF]">Bishal Bashyal</span>
          </h1>
          <div className="text-xl h-8"> {/* Fixed height to prevent layout shift */}
            <TypeAnimation
              sequence={[
                'FullStack Software Engineer',
                1000,
                'React Developer',
                1000,
                'Node.js Enthusiast',
                1000,
                'Problem Solver',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1.25em', display: 'inline-block', color: '#00A3FF' }}
              repeat={Infinity}
            />
          </div>
          <p className="text-gray-400 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="space-x-4">
            <Button primary>Contact</Button>
            <Button>Resume</Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#00A3FF] rounded-full opacity-20 blur-3xl"></div>
          <img
            src="/api/placeholder/600/600"
            alt="Profile"
            className="relative rounded-full w-[500px] h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
