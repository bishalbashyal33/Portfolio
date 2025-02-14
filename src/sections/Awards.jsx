import React from "react";
import { motion } from "framer-motion";

const TimelineItem = ({ text, date, index }) => {
  return (
    <motion.div
      className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2,
      }}
    >
      <div
        className={`bg-white border border-gray-300 p-6 rounded-lg w-1/2 shadow-sm transition-all duration-300 hover:shadow-md
        ${index % 2 === 0 ? "mr-8" : "ml-8"}`}
      >
        <h3 className="text-gray-900 font-medium mb-2">{date}</h3>
        <p className="text-gray-600 leading-relaxed">{text}</p>
      </div>

      <motion.div
        className="w-5 h-5 bg-gray-800 rounded-full z-10 shadow-sm"
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
    { text: "Completed foundational coursework in Computer Science.", date: "2018" },
    { text: "Achieved first major academic recognition.", date: "2019" },
    { text: "Published research paper on AI applications.", date: "2020" },
    { text: "Received award for outstanding project.", date: "2021" },
    { text: "Graduated with honors and began professional journey.", date: "2022" },
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-[#f7f6f3]">
      <motion.h2
        className="text-3xl font-semibold text-center text-gray-900 mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Academic Journey
      </motion.h2>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-300 z-0" />

        {academicEvents.map((event, index) => (
          <TimelineItem key={index} text={event.text} date={event.date} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Awards;
