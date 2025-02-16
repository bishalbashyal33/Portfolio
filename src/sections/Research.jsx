import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const researchProjects = [
  {
    title: "AI for Climate Change 🌍",
    description: "Exploring how artificial intelligence can help mitigate climate change by analyzing global temperature trends. This project uses machine learning to identify patterns and predict climate changes to aid in environmental conservation efforts.",
    date: "January 2025",
    author: "Dr. Alex McCarter",
    image: "https://www.unite.ai/wp-content/uploads/2024/05/Alex_Mc_A_futuristic_brain_made_of_circuitry_and_code_connect_c500ebe1-30e9-431c-98ae-ac19aec00ec9_1.png"
  },
  {
    title: "Quantum Computing 🔬",
    description: "Research on quantum algorithms that optimize complex computations in cryptography and material sciences. By leveraging quantum bits, this research aims to revolutionize fields like cybersecurity and chemical simulations.",
    date: "February 2025",
    author: "Dr. John Smith",
    image: "https://www.unite.ai/wp-content/uploads/2024/05/Alex_Mc_A_futuristic_brain_made_of_circuitry_and_code_connect_c500ebe1-30e9-431c-98ae-ac19aec00ec9_1.png"
  },
  {
    title: "Brain-Computer Interfaces 🧠",
    description: "Developing non-invasive brain-computer interfaces to assist individuals with motor disabilities. This innovative project focuses on creating devices that can help individuals control devices directly through brain activity.",
    date: "March 2025",
    author: "Dr. Emily Zhang",
    image: "https://www.unite.ai/wp-content/uploads/2024/05/Alex_Mc_A_futuristic_brain_made_of_circuitry_and_code_connect_c500ebe1-30e9-431c-98ae-ac19aec00ec9_1.png"
  },
  {
    title: "Renewable Energy Grid ⚡",
    description: "A study on optimizing smart grids using IoT and AI to integrate renewable energy sources efficiently. The project aims to enhance energy distribution, reduce waste, and improve sustainability by incorporating AI and smart sensors.",
    date: "April 2025",
    author: "Dr. Mark Johnson",
    image: "https://www.unite.ai/wp-content/uploads/2024/05/Alex_Mc_A_futuristic_brain_made_of_circuitry_and_code_connect_c500ebe1-30e9-431c-98ae-ac19aec00ec9_1.png"
  }
];

const Research = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2
        className="text-4xl font-semibold text-gray-900 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Research 🔬
      </motion.h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="pb-10"
      >
        {researchProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden p-6 space-y-4 border border-gray-300 h-[600px] flex flex-col"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full object-cover h-48" // Fixed image height
              />
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 flex-1 overflow-hidden">{project.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{project.date}</span>
                  <span>Author: {project.author}</span>
                </div>
                <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center">
                  Read More ✈️
                </button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Research;
