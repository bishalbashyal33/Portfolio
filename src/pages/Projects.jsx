import React from 'react';

const Project = () => {
  const projects = [
    { name: "Katmatic Attendance Web", top: "8", left: "25" },
    { name: "Semantic Information Extractor Cron Task", top: "8", left: "75" },
    { name: "Structured Information Extraction Web", top: "25", left: "50" },
    { name: "Schematic Enterprise Integrator Srv", top: "42", left: "25" },
    { name: "Routiney Bot", top: "42", left: "75" },
    { name: "AlgoVisualizer, CheckersAI", top: "59", left: "50" },
    { name: "Publication Repository - Web", top: "76", left: "25" },
    { name: "Katmatic Key Manger - Kiosk Desktop", top: "76", left: "75" }
  ];

  return (
    <div className="relative w-full h-screen">
      {projects.map((project, index) => (
        <div
          key={index}
          className="absolute items-center transform -translate-x-1/2 -translate-y-1/2 bg-[#00A3FF] text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#00A3FF]/10"
          style={{
            top: `${project.top}%`,
            left: `${project.left}%`
          }}
        >
          {project.name}
        </div>
      ))}
    </div>
  );
};

export default Project;
