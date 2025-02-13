import Button from '../components/Button';

const Professional = () => {
  const bulletPoints = [
    'Lorem ipsum dolor sit amet',
    'consectetur adipiscing elit',
    'sed do eiusmod tempor incididunt ut labore',
    'et dolore magna aliqua',
    'Ut enim ad minim veniam',
    'quis nostrud exercitation ullamco',
    'laboris nisi ut'
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-[#00A3FF] py-20 mb-12">Professional</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <ul className="space-y-2 text-gray-300 mb-8">
            {bulletPoints.map((point, index) => (
              <li key={index}>• {point}</li>
            ))}
          </ul>
          
          <div className="space-x-4">
            <Button primary>Professional Resume</Button>
            <Button>Read More</Button>
          </div>
        </div>
        
        <div>
          <img
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            alt="Professional workspace"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Professional;