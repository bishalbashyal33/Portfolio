import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    title: "DocBite",
    description: "An Information Extraction engine for Structured Text Documents",
    techStack: ["Pytorch", "LayoutLM", "fastapi"],
    image: "https://github.com/bishalbashyal33/hostedpublicassets/blob/main/docbite.png?raw=true",
    demoLink: "https://github.com/bishalbashyal33/docbite"
  },
  {
    title: "TweakCV",
    description: "An AI-powered resume optimization tool that enhances job seekers' profiles using LLMs and also provides templates that were most successful in FAANG companies.",
    techStack: ["Python", "LLMs", "React"],
    image: "https://github.com/bishalbashyal33/hostedpublicassets/blob/main/tweakcv.png?raw=true",
    demoLink: "https://www.tweakcv.com/"
  },
  {
    title: "3D Rendering Engine",
    description: "Built this rendering engine from scratch algorithm and pipeline implementation using C++",
    techStack: ["C++", "Shaders", "Rasterizers"],
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoy7H9i6LcAf6Iy9NktK7RDvTQyA9Gcadxfu3Uyw4hwFdpLbvwjym1ny3CIFNdNmysQbaNNG58vKXcWBGAPjNEdRJ1dK8VIAbt-FugLTVSBGTdY4VN5lzouzctXBFTGqB40Kb0NnoNUQbRH2P-8R9L5J5-zeE1F-YhxdVwuV2FfAy9q2wNfgrDE2hhkh8o/s1600/Diparshan%20Dahal.png",
    demoLink: "https://github.com/bishalbashyal33/Renderer"
  },
  {
    title: "Katmatic Bridge",
    description: "An inhouse ETL engine based on fluid templating,filter functions, cron scheduler for Enterprise data Integrations.",
    techStack: ["Angular", ".NET", "PostgreSQL"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_SDJ4sNvYLy3YEY10ZFAlk0SZufS4KuPbAQ&s",
    demoLink: "https://katmatic.com"
  },
  {
    title: "Katmatic Attendance",
    description: "A comprehensive web-based RF-attendance management system designed for school attendance, featuring real-time tracking and automated reporting.",
    techStack: ["Angular", ".NET", "PostgreSQL"],
    image: "https://www.katmatic.com/wp-content/uploads/2025/01/Attendance-System-Katmatic.png",
    demoLink: "https://katmatic.com"
  },
  {
    title: "Lead Generation Bot",
    description: "A RAG-driven bot that automates lead generation processes, utilizing web scraping and data analysis to identify potential clients.",
    techStack: ["Python", "Langchain", "Pandas"],
    image: "https://www.cio.com/wp-content/uploads/2023/08/brain_mind_circuits_connections_artificial_intelligence_by_metamorworks_gettyimages-949321092_1200x800-100767997-orig-1.jpg?quality=50&strip=all&w=1024",
    demoLink: "https://github.com/bishalbashyal33/leadgen-bot"
  },
  {
    title: "RFID Enabled Inventory Management System",
    description: "Contributed to developing an RFID-enabled system for real-time inventory tracking and management.",
    techStack: [".NET", "Angular", "Microservices"],
    image: "https://www.katmatic.com/wp-content/uploads/2025/01/Inventory-Management-System.png",
    demoLink: "https://katmatic.com"
  }
];

const Project = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2
        className="text-4xl font-bold text-gray-900 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects 💻
      </motion.h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="pb-12"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="h-auto">
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium text-white rounded-full bg-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      View Demo
                      <span className="text-base">🚀</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Project;
