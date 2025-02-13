import Button from '../components/Button';

const Research = () => {
  const bulletPoints = [
    'Lorem ipsum dolor sit amet',
    'consectetur adipiscing elit',
    'sed do eiusmod tempor incididunt ut labore',
    'et dolore magna aliqua',
    'Ut enim ad minim veniam',
    'quis nostrud exercitation ullamco'
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
        <div className= "text-right">
        <h2 className="text-4xl font-bold text-[#00A3FF] mb-12">Research</h2>
        </div>
      
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://cdn.dribbble.com/users/369809/screenshots/5770291/media/a08be99a474d29d6084dd7dd912f3207.png?resize=400x300&vertical=center"
            alt="Research visualization"
            className="rounded-lg w-full"
          />
        </div>
        
        <div>
          <p className="text-gray-300 text-right mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <ul className="space-y-2 text-gray-300 mb-8">
            {bulletPoints.map((point, index) => (
              <li key={index}>• {point}</li>
            ))}
          </ul>
          
          <div className="space-x-4">
            <Button primary>Research Resume</Button>
            <Button>Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;