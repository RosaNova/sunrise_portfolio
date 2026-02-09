import React from "react";
import Title from "../components/Title";
import EducationGroupYear from "../components/education/EducationGroupYear";
import { myEducation } from "@/data/education";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div id="education" className="md:pb-[50px] h-auto pt-[100px] bg-black text-[#fb8569]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-16"
      >
        <Title title={"My Education"} />
        <div className="w-20 h-1 bg-[#fb8569] mt-5 mx-auto" />
      </motion.div>
      <div className=" w-full  justify-start p-5 md:px-[80px] h-auto flex flex-col ">
        {
          myEducation.map((item, index) => (
            <EducationGroupYear key={index} year={item.year} educationlist={item.educationList} />
          ))
        }
      </div>
    </div>
  );
};

export default Education;
