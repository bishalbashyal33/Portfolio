import Button from "../components/Button";

const SDGs = () => {
  const bulletPoints = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt ut labore",
    "Et dolore magna aliqua",
    "Ut enim ad minim veniam",
    "Quis nostrud exercitation ullamco"
  ];

  return (
    <div className=" mx-auto px-6 py-16  ">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-right">Sustainable Development Goals</h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Image Section */}
        <div>
          <img
            src="https://cdn.dribbble.com/users/369809/screenshots/5770291/media/a08be99a474d29d6084dd7dd912f3207.png?resize=400x300&vertical=center"
            alt="Research visualization"
            className="rounded-lg border border-gray-300 shadow-sm"
          />
        </div>

        {/* Text Section */}
        <div>
          <p className="text-gray-700 text-right mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="space-y-2 text-gray-700 mb-8">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gray-500 text-xl">•</span>
                <span className="ml-2">{point}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex space-x-3 justify-end">
            <Button className="bg-[#EBEBE4] text-gray-900 border border-gray-300 shadow-sm hover:bg-gray-200">
              SDG Resume
            </Button>
            <Button className="bg-gray-900 text-white shadow-sm hover:bg-gray-800">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDGs;
