import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ text, date, index }) => {
  return (
    <motion.div 
      className={`flex items-center mb-10 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
    >
      <div 
        className={`bg-white p-6 rounded-lg w-1/2 shadow-sm transition-all duration-300 
        hover:shadow-lg border border-gray-200
        ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}
      >
        <h3 className="text-gray-900 font-semibold mb-2">{date}</h3>
        <p className="text-gray-700">{text}</p>
      </div>

      <motion.div 
        className="w-4 h-4 bg-gray-500 rounded-full z-10 shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
      />
    </motion.div>
  );
};

const Academia = () => {
  const academicEvents = [
    { text: "2018 High School BBA Award Winner", date: "2018" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing", date: "2019" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing", date: "2020" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing", date: "2021" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing", date: "2022" }
  ];

  return (
    <div className="min-h-screen py-20 px-10 ">
      <motion.h2 
        className="text-4xl font-bold text-center text-gray-900 mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Academia
      </motion.h2>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 opacity-40 z-0" />

        {academicEvents.map((event, index) => (
          <TimelineItem key={index} text={event.text} date={event.date} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Academia;
