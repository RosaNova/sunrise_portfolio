import React from "react";
import { motion } from "framer-motion";
const Progress = ({ skill = {} }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex items-center text-[#fb8569] w-full gap-4">
      <div className="md:w-[50px] w-[30px]">
        <img
          className="w-full h-full object-cover"
          src={skill.icon}
          alt={skill.name}
        />
      </div>
      <div className="flex-1 w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium md:text-lg">{skill.name}</span>
          <span className="md:text-sm  md:font-bold">{skill.percentage}%</span>
        </div>
        <div className="w-full border border-[#fb8569] p-[0.7px] h-2 md:h-3 overflow-hidden">

          <motion.div
            className="h-full bg-[#fb8569] transition-all"
            initial={{ width: 0 }}
            animate={{ width: `${skill.percentage}%` }}
            transition={{ duration: 1, delay: 0.3 * 0.1, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Progress;
