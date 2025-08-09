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
        details: ["Fully Funded with Graduate Assistantship on Spring admit", "Current Vision, VLM and LLMs Researcher under Professor Dr. Chakraborty's Research Group"],
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Tribhuvan_University_logo.svg/1200px-Tribhuvan_University_logo.svg.png",
        title: "Tribhuvan University, Pulchowk Campus (4% Acceptance Rate)",
        subtitle: "Bachelor in Computer Engineering",
        period: "2018-2023",
        details: [
          "Fully Funded with Merit-Based Scholarship & OnCampus Residence",
          "DocSumo(Industry) Undergraduate Research grant Receipent for AI/ML Research",
          "Project Mentor, Instructor and Guest Speaker at Multiple National Tech Events",
          "Directed Hultprize OnCampus at 14 Colleges, incubated over 400+ tech startups",
          "Multiple International awards and Nominations for directing Hultprize initiatives"
        ],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHXGOEin7cvt-RWdlxMbjXmY6FI49iZJFaQ&s",
        title: "The Times Secondary School",
        subtitle: "Grade 11, 12",
        period: "2016-2018",
        details: ["Fully Funded with OnCampus Residence, IT Co-ordinator at Science Club", ,
          "National Physics Olympiad Champion"],
      },
      {
        logo: "data:image/jpeg;base64,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",
        title: "New Environment English Secondary School",
        subtitle: "Grade 1-10",
        period: "Graduated: 2016",
        details: ["Fully Funded with On-School Residence, President SQC, School First", "Secured First Position(literally) in Slow Cycling Competetion"
        ],
      },
    ],
    Experience: [
      {
        logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Florida_State_University_seal.svg",
        title: "Florida State University, Tallahassee FL, USA",
        subtitle: "Graduate Assistant ",
        period: "2025 Jan - Present",
        details: ["Teaching Assistant at CS Department and Researcher at ML CV Group", "Holding Office Hours for Students and Working on Interesting Research Challenges"],
      },
      {
        logo: "data:image/jpeg;base64,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",
        title: "Katmatic Solutions Private Limited, Kathmandu, Nepal",
        subtitle: "R&D Engineer (AI, IOT FullStack) | Full-Time Role",
        period: "2023 May -2024 Dec",
        details: ["Built core functionalities and integration mechanisms for  a Wireless Weapon Tracking System for UN Base Headquarters", 
          "Helped Build a Radio Frequency enabled Student Tracking System, Used RSSI strengths, log-timestamps, and numerous features to build a proprietary Machine Learning model that identified student going in and going out Patterns based on Hopeland RF-antennas",
          "Managed, Maintained and Deployed pods on Azure Kubernetes, and oversaw System Deployment on Private infra of UN base",
          "Worked with mqtt, eventhub, and setup proper routes on apigateway for microservice implementation. also deployed the system for local debugging on docker.worked with python and py packages for complex mathematical and AI models simulaton and development.", 
          "Solo Built a Multi-Tier Generic ETL Engine with Fluid templating for Ultrafast MultiSchema MultiVendor Enterprise Data Integrations",
          "Regularly contributed to strategic Startup decisions, hiring Interview, architecture design and helped close clients over NRs. 4M",
          "Was offered a 12% equity in the company for contributions across robustness of microservices, product range expansion and strategic initiatives"],
      },
      {
        logo: "data:image/jpeg;base64,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",
        title: "Katmatic Solutions Private Limited, Kathmandu, Nepal",
        subtitle: "R&D Intern (AI, IOT) | Full-Time Role",
        period: "2023 Jan -2023 May",
        details: ["Solo Built a Kiosk Based Visitor Management System on Raspberry Pi, using RFID and modbus protocol on top of Avalonia. Utilized the backbone of existing microservices for building an integrated solution.",
          "Built a feature that performed Data querying, pre-processing and Analysis on existing inventory data for the Inventory Management System Product lineup and utilized langchain to generate explainable reports of missing inventories, lowstock and expected orders for Stakeholders"
        ],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrn4MwotHet5UgoXAGQuFdz25AeN9a7r4Uog&s",
        title: "Fusemachines, Kathmandu, Nepal",
        subtitle: "Fuse AI Scholar | Part Time Fellowship",
        period: "2023 Jan -2023 May",
        details: ["Worked on automated essay scoring, rubric based grading using static features, BERT and LLMs. ahieved a near state of the art QWK metric by proposed approach.",
          "Built a plant disease detection system with CNN and LVQ navigating challenges caused by high contrast and variable brightness in images.",
          "Predicted Peak Pollution time at Kathmandu with Particulate Matter data analytics to predict season, and trend components with STL, also utilized SARIMA model for auto- regressive time-series prediction."
        ],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1x4uiASSALyoRI15lAVHebWNq7P7UtS_SA&s",
        title: "Hultprize, Pulchowk Campus, Nepal",
        subtitle: "Campus Director",
        period: "2023 Jan -2023 May",
        details: ["Ran a startup incubation programme at 14 different colleges, trained over 18k students and helped incubated over 200 tech based startups",
          "Received Mayoral endorsement for the programme, deliberated at the Office of the Honorable President of Nepal, was covered in 200+ media articles, and 5+ televeision segments.",
          "Received Multiple international awards and nominations including the first and only Program of the Year from Nepal at a global stage."
        ],
      },
    ],
    Volunteering: [
      {
        logo: "https://avatars.githubusercontent.com/u/17596700?s=280&v=4",
        title: "LOCUS, National Tech Festival, Tribhuvan University, Pulchowk Campus ",
        subtitle: "Volunteering",
        period: "2020-2023",
        details: ["Organized tech workshops and hackathons",
          "Mentored students on project development during senior year",
          "Designed flyers, posters and Display ads for Core Programmes",
          ],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-6cipZEHvEPgxlhX-fK7lk3yTt0zlDN0aQ&s",
        title: "Children in Technology and Internet Safety Programme",
        subtitle: "Community Service",
        period: "2020-2023",
        details: ["Designed educational materials on internet safety and digital literacy for children",
          "Mentored over 1000+ school-students in the remote areas of Nepal about AI, Softwares, Programming, and Cyberlaw, and Internet Safety initiatives for children.",
         
          ],
      },
            {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStukpbzZJVI7CZsdcUn37z6iJ1-oT8soZNsQ&s",
        title: "Social Entrepreneurship and Innovation Programmes",
        subtitle: "Volunteering",
        period: "2020-2023",
        details: ["Helped organized over 100 social entrepreneurship and innovation workshops by collaborating with the government, industries and entrepreneurs.",
         
          ],
      },
      {
        logo: "https://media.edusanjal.com/u/impact-marathon.jpg",
        title: "Impact Marathon",
        subtitle: "Volunteering",
        period: "2020-2023",
        details: ["Led and organized an Impact Marathon with over 100+ runners to raise awareness on Fast Fashion, and to promote sustainable practices.",
         
          ],
      },
    ],
    Awards: [
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hjKdYu0LIlKz1N0tB5dXh51jwbdgWz4TZA&s",
        title: "National Physics Olympiad Champion",
        subtitle: "NePhO (Nepal Physics OLympiad)",
        period: "2023",
        details: ["Awarded a Champion title during the competition"],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4dxo7iQ3QORFQvM51DPfl2rKHPDXQ4s4vw&s",
        title: "HISSAN Meritorious Student Award",
        subtitle: "HISSAN, Nepal",
        period: "2023",
        details: ["Awarded for academic excellence"],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fz-bQs4f6s9f3HzJSIWkLehMZoqjyqJv_Q&s",
        title: "Central & South Asia Program of the Year Award",
        subtitle: "Hultprize, Paris, France",
        period: "2023",
        details: ["Awarded for contribution to startup culture, social entrepreneurship and innovation"],
      },
       {
        logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Logo_of_Nepal_Engineering_Council.jpeg",
        title: "Licensed Engineer with Nepal Engineering Council",
        subtitle: "Nepal Engineering Council",
        period: "2023",
        details: ["Registered as a Licensed Computer Engineer via a Competitive Exam"],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwoZutk4XOHb90PWLt57Vcvc_ZZ1fnAgKTg&s",
        title: "Invited to HPAIR Conference 2024",
        subtitle: "Harvard University",
        period: "2023",
        details: ["Selected for attending the HPAIR Conference in Boston in 2024"],
      },
    ],
    Scholarships: [
      {
        logo: "data:image/jpeg;base64,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",
        title: "Graduate Assistantship",
        subtitle: "Florida State University",
        period: "2024-2026",
        details: ["Fully Funded MS CS at Florida State University with stipend"],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStukpbzZJVI7CZsdcUn37z6iJ1-oT8soZNsQ&s",
        title: "Undegratuate Scholarship with OnCampus Residence",
        subtitle: "Pulchowk Campus, Nepal",
        period: "2024-2026",
        details: ["Fully Funded by merit-based competitive exam including OnCampus Residence"],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrn4MwotHet5UgoXAGQuFdz25AeN9a7r4Uog&s",
        title: "Fuse AI Scholarship Receipent 2024",
        subtitle: "Fusemachines",
        period: "2024-2026",
        details: ["Awarded by a Competitive Entrance Exam for AI specialization and a 6 months fellowship and research work."],
      },
        {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHqvneKYaupfwT-NrkeUgVoKraqKPK8j0Kg&s",
        title: "Mahatma Gandhi Scholarship",
        subtitle: "Indian Embassy",
        period: "2024-2026",
        details: ["Merit-based scholarship for academic excellence awarded by Indian Embassy"],
      },
      {
        logo: "https://play-lh.googleusercontent.com/kKRQZhXNWR6U01Wt5Owr-h1okgkpCQHxuTgfgYosHKSYJnQBAQOyOaqwAHAf9bXQpBw1",
        title: "College Full Funding Scholarship with OnCampus Residence",
        subtitle: "The Times Secondary School",
        period: "2024-2026",
        details: ["Merit-based scholarship for a excellent academic record during SEE exams including OnCampus Residence and Fooding."],
      },
      {
        logo: "https://media.edusanjal.com/__sized__/logos/480794834_1790747755092435_2447141256924041082_n-thumbnail-200x200-70.jpg",
        title: "High-School Full Funding Scholarship with OnSchool Residence",
        subtitle: "New Environment English Higher Secondary School",
        period: "2024-2026",
        details: ["Merit-based scholarship for a record-high academic excellence awarded throughout my school years. Included Residence and Fooding."],
      },
    ],
    Research: [
      {
        logo: "https://www.corpnet.com/wp-content/uploads/2022/01/Legal-Document.jpg",
        title: "Comparative Analysis and Study of Technology Approach to Document Image Understanding for Structure Text Document Image",
        subtitle: "LNNS Series, Springer | Published",
        period: "2024",
        details: ["First Author of this Paper which concluded various results based on our findings during Undergraduate Major Research."],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVjSer5HF7nONuUZSF6Co3Eq6puHLkmoSzg&s",
        title: "Dual Axis Neural Network Compression with Principal Component Analysis.",
        subtitle: " | OnGoing",
        period: "2025",
        details: ["Working on the compression techniques for neural networks using PCA and information theory. Traditional approaches treat neural network layer and sizes as hyperparameters and searching through them is extremely time consuming. My proposed approach can reduce neural network size horizontally and vertically by upto 75% with little to no drop in accuracy(<1%)"],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcaCkagt9nxFWiTg_sEEiVwRl6kwyzBCvECg&s",
        title: "Instance-level Subject-Background Disentanglement for Domain Adaptation via Embedding Gap Guided Synthesis",
        subtitle: " | OnGoing",
        period: "2025",
        details: ["Working on the disentanglement techniques for Image Generation guided by Domain Gaps as we separate concerns for the background and foreground disparities. Current findings show that this approach requires less data to evluate domain gaps and can generate images in target domain with better quality and less noise (higher FID scores)."],
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
      Research: "📄",
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