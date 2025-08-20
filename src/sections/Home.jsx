import { TypeAnimation } from 'react-type-animation';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-20 text-gray-800 dark:text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Hi👋, I'm <span className="text-gray-900 dark:text-gray-100">Bishal Bashyal</span>
          </h1>
          <div className="text-lg font-medium h-8">
          <TypeAnimation
              sequence={[
                'AI Researcher 🤖',
                1000,
                'FullStack Software Engineer 💻',
                1000,
                'Quantitative Researcher 📊',
                1000,
                'Problem Solver 🧠',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block', color: '#4A5568' }}
              repeat={Infinity}
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            Passionate about building scalable applications and solving complex problems through technology, data and AI.
          </p>
          <div className="space-x-4">
  <Button 
    primary 
    onClick={() => window.location.href = "mailto:bishalbash333@gmail.com"}
  >
    Say Hi! 🛫
  </Button>
  <Button 
    onClick={() => window.open("https://drive.google.com/file/d/1NlwuOu16xQb0bfC1YaaROzk-MIvXkFru/view?usp=sharing", "_blank")}
  >
    Resume 📃
  </Button>
</div>

        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 "></div>
          <img
            src="https://raw.githubusercontent.com/bishalbashyal33/hostedpublicassets/refs/heads/main/personart.png"
            alt="Profile"
            className="relative  object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
