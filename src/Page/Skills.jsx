import React, { useState } from "react";
import Title from "../components/Title";
import { motion } from "framer-motion";
import SkillsBlock from "../components/skills/SkillsBlock";
import mySkills from "@/assets/data/mySkill";



const Skills = () => {
  const [fontendSkills, setFrontend] = useState(mySkills[0].Fontend);
  const [backendSkills, setBackend] = useState(mySkills[0].Backend);
  const [database, setDatabase] = useState(mySkills[0].Database);
  const [design , setDesign] = useState(mySkills[0].Disign);
  return (
    <div
      id="skills"
      className="skills  bg-black  md:pt-[100px] w-full md:pb-[70px] p-[30px]"
    >
       <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
      <Title className="" title={"My Skills"} />
      <div className="w-20 h-1 bg-[#fb8569] mt-5  mx-auto" />
      </motion.div>
      <div className="flex skill-containers lg:py-0 md:py-10   md:gap-20 lg:p-[70px] md:p-[15px] w-full flex-wrap justify-center ">
        <div className="block-left w-full  md:w-[45%] gap-10 md:gap-0 pb-5 md:p-0 flex justify-between flex-col">
          <SkillsBlock title={"Front-End Developement"} Skill={fontendSkills} />
        </div>
        <div className="block-right  w-full md:w-[45%]  gap-10 md:gap-0  flex justify-between flex-col">
          <SkillsBlock title={"Back-End Developement"} Skill={backendSkills} />
          <SkillsBlock title={"Database Management"} Skill={database} />
          <SkillsBlock title={"UX/UI & Design"} Skill={design} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
