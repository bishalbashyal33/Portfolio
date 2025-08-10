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
        "Python (PyTorch)",
        "Linux, Hypergator",
        "LLM, VLM, Statistics, ML",
        "Git, GitHub"
      ],
      contributions: [
        "Developed algorithms for NeuralNetwork Compression",
        "Implemented Baselines for OnGoing Research Projects",
        "Optimized Existing methods on ModelRanking with Pipeline extension improving performance by over 30%"
      ],
      achievements: [
        "Succesfully delivered an efficient Top-k Subtree similarity search Algorithm as Capstone for Advanced Database Systems",
        "Reduced Pipeline execution time on B200 GPUs by 30%",
        "Devised an efficient Neural Network Compression algorithm using PCA"
      ],
      personalityUpgrades: [
        "Collaborating and Working with Teams on Complex Research Questions",
        "Developed new ability to implement systems and algorithms by reading Research Papers",
        "Developed strong problem-solving skills in high-pressure situations"
      ]
    },
    "Katmatic Solutions": {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96HS5bW8rebdSKp4v4ud_z682QJKmgdy4RQ&s",
      techStack: [
        ".NET, Angular, Python (PyTorch), Langchain, scikit-learn",
        "AWS (EC2, S3, Lambda), Azure CosmosDB",
        "Docker, Azure Kubernetes(CI/CD), Microsoft IIS",
        "MongoDB, PostgreSQL,Redis,MQTT,ElasticSearch,Kibana, FAISS vector store"
      ],
      contributions: [
        "Developed machine learning algorithms for predictive inventory analytics and RSSI patterns for passive tag tracking",
        "Led the implementation of a Generic ETL Engine for Enterprise Data Integrations using Fluid Templating",
        "Reduced False Positive signal received on tracking passive tags with RF-Antenaas by 15%"
      ],
      achievements: [
        "Successfully delivered 3 Enterprise projects ahead of schedule",
        "Reduced cloud infrastructure costs by 30%",
        "Awarded Equity in the company for excellent contribution towards new product lineups and strategic initatives."
      ],
      personalityUpgrades: [
        "Enhanced leadership skills by managing a team of 4 developers and conducting Hiring interviews for new interns.",
        "Improved client communication through regular technical presentations on product features and architecture review.",
        "Developed strong problem-solving skills in time-sensitive high-pressure situations"
      ]
    },
    "FuseMachines": {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrn4MwotHet5UgoXAGQuFdz25AeN9a7r4Uog&s",
      techStack: [
        "Python,NLTK,BERT,Langchain,RAG,CNN",
        "Reactjs",
      ],
      contributions: [
        "Built AI-powered automated esssay scoring system for Rubric Based Grading Tasks.",
        "Developed custom Ensemble models with finetuned BERT and LLM Based Scoring",
        "Built a Plant disease detection system with CNN and LVQ"
      ],
      achievements: [
        "Essay Scoring Ensemble method achieved near state of the art score on Automated Essay Scoring system.",
        "Conducted 20 Paper Recitation sessions as the Team Lead.",
        "Built a webapp based on our evaluated method for Automated Essay Scoring and Plant Disease Detection."
      ],
      personalityUpgrades: [
        "Improved the ability to think mathematically around common challenges and pitfalls in Machine Learning",
        "Improved Teamwork, Paper Recitation and Ability to Build Research Questions from past researchwork.",
        "Built presentation and communication skills while showcasing our Research work"
      ]
    },
    "Pulchowk Campus": {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStukpbzZJVI7CZsdcUn37z6iJ1-oT8soZNsQ&s",
      techStack: [
        "Python,FastAPI,LayoutLM,Pytorch",
        "Reactjs, Tailwindcss",
        "Mongodb,Firebase,Postgresql",
      ],
      contributions: [
        "Built a Web Information Extraction Engine for Structured Text Documents",
        "First Author Publication on Information Extraction from Structured Text Document",
        "Contributed by building a publication repository and OpenCourseware platform for the CS department"
      ],
      achievements: [
        "Received Industry Funded Research Grant for AI Research",
        "Instructed in National Tech Events on topics like Pandas, Numpy, Data Science, Git, Github",
        "Won multiple awards during my undergraduate years"
      ],
      personalityUpgrades: [
        "Developed ability to justify, explain and build stories around concepts for Teaching others.",
        "Enhanced public speaking skills, teamwork, and foundational skills on DeepLearning",
        "Strengthened software engineering and Object Oriented Analysis and Design skills",
        "Built an entrepreneurial mindset and leadership capabilities via HultPrize and Hackathon initiatives"
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
    <div className="min-h-screen w-full flex flex-col items-center p-4 overflow-x-hidden">
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
        <div className="flex flex-col sm:flex-row gap-4 overflow-x-hidden">
          {/* Vertical Tabs */}
          <div className="flex sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 w-full sm:w-48 flex-shrink-0">
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
                  className="w-8 h-8 rounded-lg flex-shrink-0"
                />
                <span className="ml-3 text-sm font-medium hidden sm:block truncate">
                  {company}
                </span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            <div className="bg-white p-3 sm:p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-6 flex-wrap">
                <img
                  src={companyData[activeTab].logo}
                  alt={activeTab}
                  className="w-12 h-12 rounded-lg"
                />
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 ml-4">
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
