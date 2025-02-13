import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ text, date, index }) => {
  return (
    <motion.div 
      className={`flex items-center mb-10 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2
      }}
    >
      <div 
        className={`bg-[#01223b] p-6 rounded-lg w-1/2 
        transition-all duration-300 hover:shadow-xl hover:shadow-[#00A3FF]/10
        ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}
      >
        <h3 className="text-[#00A3FF] font-semibold mb-2">{date}</h3>
        <p className="text-white">{text}</p>
      </div>

      <motion.div 
        className="w-6 h-6 bg-[#00A3FF] rounded-full z-10 shadow-lg shadow-[#00A3FF]/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
      />
    </motion.div>
  );
};

const Awards = () => {
  const academicEvents = [
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing", date: "2018" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing", date: "2019" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing", date: "2020" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing", date: "2021" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing", date: "2022" }
  ];

  return (
    <div className="min-h-screen py-20 px-10">
      <motion.h2 
        className="text-4xl font-bold text-center text-[#00A3FF] mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Awards
      </motion.h2>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00A3FF] opacity-50 z-0" />

        {academicEvents.map((event, index) => (
          <TimelineItem
            key={index}
            text={event.text}
            date={event.date}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Awards;