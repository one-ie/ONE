import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css'; // Ensure you've imported TailwindCSS for styling

const timelineVariants = {
  visible: i => ({
    opacity: 1,
    translateY: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
  hidden: { opacity: 0, translateY: 20 },
};

const TimelineItem = ({ item, index }) => (
  <motion.div
    className="relative mb-8 flex justify-between items-center w-full left-timeline"
    variants={timelineVariants}
    custom={index}
    initial="hidden"
    animate="visible"
  >
    <div className="order-1 w-5/12"></div>
    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
      <h1 className="mx-auto text-white font-semibold text-lg">{index + 1}</h1>
    </div>
    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
      <h3 className="mb-3 font-bold text-gray-800 text-xl">{item.title}</h3>
      <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
        {item.content}
      </p>
    </div>
  </motion.div>
);

const AnimatedTimeline = ({ items }) => (
  <div className="py-8 overflow-hidden">
    <div className="flex flex-col md:flex-row justify-between items-center">
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </div>
  </div>
);

export default AnimatedTimeline;