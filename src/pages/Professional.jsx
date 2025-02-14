import Button from '../components/Button';

const Professional = () => {
  const bulletPoints = [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
    'Sed do eiusmod tempor incididunt ut labore',
    'Et dolore magna aliqua',
    'Ut enim ad minim veniam',
    'Quis nostrud exercitation ullamco',
    'Laboris nisi ut'
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 py-16">
      <h2 className="text-4xl font-semibold text-gray-900 text-center py-20 mb-12">
        Professional
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <ul className="space-y-3 text-gray-700 mb-8 max-w-xl">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-gray-500">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex space-x-4">
            <Button className="border border-gray-300 text-gray-700 hover:bg-gray-100">
              Professional Resume
            </Button>
            <Button className="border border-gray-300 text-gray-700 hover:bg-gray-100">
              Read More
            </Button>
          </div>
        </div>

        <div>
          <img
            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            alt="Professional workspace"
            className="rounded-lg w-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Professional;
