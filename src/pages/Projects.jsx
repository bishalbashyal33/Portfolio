import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    { name: "Katmatic Attendance Web" },
    { name: "Semantic Information Extractor Cron Task" },
    { name: "Structured Information Extraction Web" },
    { name: "Schematic Enterprise Integrator Srv" },
    { name: "Routiney Bot" },
    { name: "AlgoVisualizer, CheckersAI" },
    { name: "Publication Repository - Web" },
    { name: "Katmatic Key Manager - Kiosk Desktop" }
  ];

  const radius = 220; // Increased for better spacing
  const centerX = 300;
  const centerY = 300;

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <svg
        className="absolute"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Center Dot */}
        <circle cx={centerX} cy={centerY} r="6" fill="black" />

        {/* Lines from center to projects */}
        {projects.map((_, index) => {
          const angle = (index / projects.length) * (2 * Math.PI);
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return (
            <line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="black"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      {/* Project Labels - Corrected Positioning */}
      {projects.map((project, index) => {
        const angle = (index / projects.length) * (2 * Math.PI);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const offsetX = angle > Math.PI ? -80 : 10; // Dynamic alignment
        const offsetY = angle > Math.PI / 2 && angle < (3 * Math.PI) / 2 ? -15 : 5;

        return (
          <motion.div
            key={index}
            className="absolute px-4 py-2 rounded-lg bg-white shadow-md border border-gray-300 text-gray-900 text-sm font-medium 
            transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{
              top: `calc(50% + ${y - centerY}px + ${offsetY}px)`,
              left: `calc(50% + ${x - centerX}px + ${offsetX}px)`,
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          >
            {project.name}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Project;
