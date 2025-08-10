import React, { useState } from "react";

const Professional = () => {
  const [activeTab, setActiveTab] = useState("Katmatic Solutions");

  const sectionEmojis = {
    "Tech Stack": "🛠️",
    "Contributions": "💡",
    "Achievements": "🏆",
    "Personal Growth": "🌱"
  };

  // Updated JSON data with FSU logo
  const companyData = {

   "Florida State (FSU)": {
      logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Florida_State_University_seal.svg",
      techStack: [
        "Python (TensorFlow, PyTorch)",
        "AWS (EC2, S3, Lambda)",
        "Docker, Kubernetes",
        "MongoDB, PostgreSQL"
      ],
      contributions: [
        "Developed machine learning algorithms for predictive analytics",
        "Led the implementation of automated data pipeline system",
        "Optimized model deployment process reducing inference time by 40%"
      ],
      achievements: [
        "Successfully delivered 3 major ML projects ahead of schedule",
        "Reduced cloud infrastructure costs by 30%",
        "Awarded 'Best Technical Innovation' for Q2 2023"
      ],
      personalityUpgrades: [
        "Enhanced leadership skills by managing a team of 4 developers",
        "Improved client communication through regular technical presentations",
        "Developed strong problem-solving skills in high-pressure situations"
      ]
    },
    "Katmatic Solutions": {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96HS5bW8rebdSKp4v4ud_z682QJKmgdy4RQ&s",
      techStack: [
        "Python (TensorFlow, PyTorch)",
        "AWS (EC2, S3, Lambda)",
        "Docker, Kubernetes",
        "MongoDB, PostgreSQL"
      ],
      contributions: [
        "Developed machine learning algorithms for predictive analytics",
        "Led the implementation of automated data pipeline system",
        "Optimized model deployment process reducing inference time by 40%"
      ],
      achievements: [
        "Successfully delivered 3 major ML projects ahead of schedule",
        "Reduced cloud infrastructure costs by 30%",
        "Awarded 'Best Technical Innovation' for Q2 2023"
      ],
      personalityUpgrades: [
        "Enhanced leadership skills by managing a team of 4 developers",
        "Improved client communication through regular technical presentations",
        "Developed strong problem-solving skills in high-pressure situations"
      ]
    },
    
    "FuseMachines": {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrn4MwotHet5UgoXAGQuFdz25AeN9a7r4Uog&s",
      techStack: [
        "Python (spaCy, NLTK)",
        "Node.js, Express",
        "React Native",
        "Redis, MySQL"
      ],
      contributions: [
        "Built AI-powered chatbot platform",
        "Developed custom NLP models",
        "Created automated testing framework"
      ],
      achievements: [
        "Chatbot achieved 85% customer satisfaction rate",
        "Reduced customer service costs by 40%",
        "Won 'Innovation Excellence' award"
      ],
      personalityUpgrades: [
        "Mastered agile development practices",
        "Improved project estimation skills",
        "Developed mentoring capabilities"
      ]
    },
    "Pulchowk Campus": {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStukpbzZJVI7CZsdcUn37z6iJ1-oT8soZNsQ&s",
      techStack: [
        "Flutter",
        "Firebase",
        "Google Cloud Platform",
        "Analytics Tools"
      ],
      contributions: [
        "Led development of sustainable energy monitoring app",
        "Implemented IoT integration system",
        "Created data visualization dashboard"
      ],
      achievements: [
        "Reached regional finals in competition",
        "Secured $50K in seed funding",
        "Featured in TechCrunch"
      ],
      personalityUpgrades: [
        "Developed entrepreneurial mindset",
        "Enhanced public speaking skills",
        "Strengthened networking abilities"
      ]
    }
  };

  const companies = Object.keys(companyData);

  const renderSection = (title, items) => (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
        <span className="mr-2 text-xl">{sectionEmojis[title]}</span>
        {title}
      </h3>
      <div className="space-y-2 ml-6">
        {items.map((item, idx) => (
          <p key={idx} className="text-sm text-gray-600 flex items-start">
            <span className="mr-2">•</span>
            <span>{item}</span>
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4">
      <div className="w-full max-w-4xl bg-white p-4 sm:p-6">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Professional Experience
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            A brief summary of what I have done in professional & semi-professional settings
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex gap-4">
          {/* Vertical Tabs */}
          <div className="flex flex-col space-y-2 w-12 sm:w-48 flex-shrink-0">
            {companies.map((company) => (
              <button
                key={company}
                onClick={() => setActiveTab(company)}
                className={`flex items-center p-2 rounded-lg transition-all duration-200 ${
                  activeTab === company
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                title={company}
              >
                <img
                  src={companyData[company].logo}
                  alt={company}
                  className="w-8 h-8 rounded-lg"
                />
                <span className="ml-3 text-sm font-medium hidden sm:block">
                  {company}
                </span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <img
                  src={companyData[activeTab].logo}
                  alt={activeTab}
                  className="w-12 h-12 rounded-lg"
                />
                <h2 className="text-xl font-semibold text-gray-800 ml-4">
                  {activeTab}
                </h2>
              </div>
              
              {renderSection("Tech Stack", companyData[activeTab].techStack)}
              {renderSection("Contributions", companyData[activeTab].contributions)}
              {renderSection("Achievements", companyData[activeTab].achievements)}
              {renderSection("Personal Growth", companyData[activeTab].personalityUpgrades)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;