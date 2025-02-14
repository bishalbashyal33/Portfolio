import Button from '../components/Button';

const Research = () => {
  const bulletPoints = [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
    'Sed do eiusmod tempor incididunt ut labore',
    'Et dolore magna aliqua',
    'Ut enim ad minim veniam',
    'Quis nostrud exercitation ullamco'
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 py-16">
      <div className="text-right">
        <h2 className="text-4xl font-semibold text-gray-900 mb-12">Research</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://cdn.dribbble.com/users/369809/screenshots/5770291/media/a08be99a474d29d6084dd7dd912f3207.png?resize=400x300&vertical=center"
            alt="Research visualization"
            className="rounded-lg w-full shadow-lg"
          />
        </div>

        <div>
          <p className="text-gray-600 text-right mb-6 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="space-y-2 text-gray-700 mb-8">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-gray-500">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="space-x-4">
            <Button className="border border-gray-300 text-gray-700 hover:bg-gray-100">
              Research Resume
            </Button>
            <Button className="border border-gray-300 text-gray-700 hover:bg-gray-100">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
