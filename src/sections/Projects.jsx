import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    title: "Katmatic Attendance Web",
    description: "A comprehensive web-based attendance management system designed for enterprises, featuring real-time tracking and automated reporting.",
    techStack: ["React", "Django", "PostgreSQL"],
    image: "https://www.cio.com/wp-content/uploads/2023/08/brain_mind_circuits_connections_artificial_intelligence_by_metamorworks_gettyimages-949321092_1200x800-100767997-orig-1.jpg?quality=50&strip=all&w=1024"
  },
  {
    title: "Semantic Information Extractor Cron Task",
    description: "An automation tool that extracts and processes semantic information from unstructured data sources, enhancing data insights.",
    techStack: ["Python", "NLP", "CRON"],
    image: "https://www.cio.com/wp-content/uploads/2023/08/brain_mind_circuits_connections_artificial_intelligence_by_metamorworks_gettyimages-949321092_1200x800-100767997-orig-1.jpg?quality=50&strip=all&w=1024"
  },
  {
    title: "Ludo Multiplayer Game",
    description: "A real-time multiplayer Ludo game with room-based invites, built using React and Django with WebSockets.",
    techStack: ["React", "Django", "WebSockets"],
    image: "https://www.cio.com/wp-content/uploads/2023/08/brain_mind_circuits_connections_artificial_intelligence_by_metamorworks_gettyimages-949321092_1200x800-100767997-orig-1.jpg?quality=50&strip=all&w=1024"
  },
  {
    title: "Big Data Analysis Pipeline",
    description: "A scalable pipeline leveraging Hadoop and Spark for processing large-scale datasets, featuring efficient data summarization and visualization.",
    techStack: ["Hadoop", "Spark", "Python"],
    image: "https://www.cio.com/wp-content/uploads/2023/08/brain_mind_circuits_connections_artificial_intelligence_by_metamorworks_gettyimages-949321092_1200x800-100767997-orig-1.jpg?quality=50&strip=all&w=1024"
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
                  
                  <button className="w-full px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center gap-2">
                    View Demo
                    <span className="text-base">🚀</span>
                  </button>
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