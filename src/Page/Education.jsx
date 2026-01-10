import React from "react";
import Title from "../components/Title";
import EducationGroup from "../components/education/educationGroup";
import { myEducation } from "@/assets/data/myEducation";
import { motion} from "framer-motion";

const Education = () => {
  return (
    <div id="education" className="md:pb-[50px] h-auto pt-[100px] bg-black text-[#fb8569]">
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
      <Title title={"My Education"} />
       <div className="w-20 h-1 bg-[#fb8569] mt-5 mx-auto" />
      </motion.div>
      <div className=" w-full h-auto flex flex-col ">
        {
           myEducation.map((item , index)=>(
              <EducationGroup key={index} path={item.path} location={item.location} specialization={item.specialization} year={item.year} school={item.school} />   
           ))
        }
       
       </div>
    </div>
  );
};

export default Education;
