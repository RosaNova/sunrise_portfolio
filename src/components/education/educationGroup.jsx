import React from "react";
import { motion } from "framer-motion";
import { School, MapPin } from "lucide-react";

const educationGroup = ({
  school = "",
  specialization = "",
  path = "",
  location = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full border  group hover:border-[#fb8569]/20 duration-300 p-4 border-[#fb8569]/50">
      <h1 className="text-2xl h-[70px]  group-hover:text-[#fb8569]/60 font-bold">{path}</h1>
      <p className="text-[15px] group-hover:text-[#fb8569]/50 pb-2">  {specialization}</p>
      <p className="text-[15px] flex gap-2 group-hover:text-[#fb8569]/50 items-center pb-5"> <School className="w-[20px]" /> {school}</p>
      <div className="line w-[50%] h-[1px] group-hover:bg-[#fb8569]/50 mb-2 bg-[#fb8569]"></div>
      <p className="text-[15px] flex gap-2 group-hover:text-[#fb8569]/50 items-center"> < MapPin className="w-[20px]" /> {location}</p>
    </motion.div>
  );
};

export default educationGroup;
