import React from "react";
import { motion} from "framer-motion";

const educationGroup = ({
  year = "",
  school = "",
  specialization = "",
  path = "",
  location = ""
}) => {
  return (
    <motion.div
      
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2  }}
             className="border-t-2 border-[#fb8569]/50 flex justify-between py-5 border-main text-main w-[90%] m-auto">
      <div className="block-left text-start flex flex-col justify-start items-start">
        <motion.h1
            whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
                  className="md:text-2xl  font-bold">{specialization}</motion.h1>
        <p className="text-sm text-[#fb8569]/70">[ {path} ]</p>
      </div>
      <div className="block-right flex flex-col text-end justify-end items-end">
        <h1 className="md:text-2xl font-bold">{year}</h1>
        <h1 className="md:text-2xl font-bold text-[#fb8569]/70">{school}</h1>
        <h1 className="md:text-xl font-bold text-[#fb8569]/50">[{location}]</h1>
        
      </div>
    </motion.div>
  );
};

export default educationGroup;
