import React, { useState } from "react";

const Summary = () => {
  const [activeTab, setActiveTab] = useState("Education");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const journeyData = {
    Education: [
      {
        logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Florida_State_University_seal.svg",
        title: "Florida State University, Tallahassee FL, USA",
        subtitle: "MS Computer Science",
        period: "2024-2026",
        details: ["Fully Funded with Graduate Assistantship"],
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Tribhuvan_University_logo.svg/1200px-Tribhuvan_University_logo.svg.png",
        title: "Tribhuvan University, Pulchowk Campus",
        subtitle: "Bachelor in Computer Engineering",
        period: "2018-2023",
        details: [
          "Fully Funded with Merit-Based Scholarship",
          "Director Hult at IOE",
        ],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHXGOEin7cvt-RWdlxMbjXmY6FI49iZJFaQ&s",
        title: "The Time Secondary School",
        subtitle: "Grade 11, 12",
        period: "2016-2018",
        details: ["Fully Funded with OnCampus Residence, IT Co-ordinator at Science Club"],
      },
      {
        logo: "https://theedunepal.ap-south-1.linodeobjects.com/uploads/clients/newenvironmentschool/logo/b9f5b09e0ad828d0d22ced701df1e805-newenvironmentschool.png",
        title: "New Environment English Secondary School",
        subtitle: "Grade 1-10",
        period: "Graduated: 2016",
        details: ["Fully Funded, President SQC, School First"],
      },
    ],
    Experience: [
      {
        logo: "https://via.placeholder.com/60",
        title: "Florida State University, Tallahassee FL, USA",
        subtitle: "Graduate Assistant",
        period: "2024-2026",
        details: ["Research and Teaching Assistant"],
      },
    ],
    Volunteering: [
      {
        logo: "https://via.placeholder.com/60",
        title: "Tribhuvan University, Pulchowk Campus",
        subtitle: "Community Service",
        period: "2020-2023",
        details: ["Organized tech workshops and hackathons"],
      },
    ],
    Awards: [
      {
        logo: "https://via.placeholder.com/60",
        title: "Best Research Paper Award",
        subtitle: "IEEE Conference",
        period: "2023",
        details: ["Awarded for research excellence in AI"],
      },
    ],
    Scholarships: [
      {
        logo: "https://via.placeholder.com/60",
        title: "Graduate Assistantship",
        subtitle: "Florida State University",
        period: "2024-2026",
        details: ["Fully Funded with stipend"],
      },
    ],
    Publications: [
      {
        logo: "https://via.placeholder.com/60",
        title: "AI in Healthcare",
        subtitle: "Springer Journal of AI",
        period: "2023",
        details: ["Co-authored a paper on AI advancements in medicine"],
      },
    ],
  };

  const tabs = Object.keys(journeyData);

  const TabIcon = ({ tab }) => {
    const icons = {
      Education: "🎓",
      Experience: "💼",
      Volunteering: "🤝",
      Awards: "🏆",
      Scholarships: "🎖",
      Publications: "📄",
    };
    return <span className="text-2xl" title={tab}>{icons[tab]}</span>;
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4">
      <div className="w-full max-w-4xl bg-white  p-4 sm:p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">My Journey</h1>
          <p className="text-sm sm:text-base text-gray-500">A brief summary of my life and experiences so far</p>
        </div>

        {/* Responsive Icon Navigation */}
        <div className="flex justify-center border-b pb-4 overflow-x-auto">
          <div className="flex space-x-6 sm:space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex flex-col items-center transition-all duration-200 ${
                  activeTab === tab
                    ? "border-b-2 border-gray-500 text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                title={tab}
              >
                <TabIcon tab={tab} />
                <span className="text-xs sm:text-sm font-medium hidden sm:block mt-1">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Current Tab Display (Mobile) */}
        <div className="sm:hidden text-center mt-2 mb-4">
          <span className="font-medium text-gray-700">{activeTab}</span>
        </div>

        {/* Content */}
        <div className="mt-6 overflow-auto">
          {journeyData[activeTab] && journeyData[activeTab].length > 0 ? (
            journeyData[activeTab].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row items-start p-3 sm:p-4 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 transition duration-150 mb-4"
              >
                <img 
                  src={item.logo} 
                  alt="" 
                  className="w-12 h-12 rounded-full object-cover mb-3 sm:mb-0 sm:mr-4" 
                />
                <div>
                  <h3 className="font-medium text-gray-800 text-base sm:text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {item.subtitle} {item.period && `| ${item.period}`}
                  </p>
                  {item.details && item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-xs sm:text-sm mt-1">• {detail}</p>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500 italic">
              No entries found for this section.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Summary;