import Title from "../components/Title";
import { motion } from "framer-motion";
import SkillsBlock from "../components/skills/SkillsBlock";
import skillCategories from "@/data/skills";


const Skills = () => {

  return (
    <div
      id="skills"
      className="bg-black pt-[100px] w-full lg:px-[80px] md:pb-[70px] p-5"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <Title className="" title={"My Skills"} />
        <div className="w-20 h-1 bg-[#fb8569] mt-5 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
        {skillCategories.map((category, index) => (
          <SkillsBlock key={index} title={category.category} description={category.description} Skill={category.skills} />
        ))}
      </div>

    </div>
  );
};

export default Skills;
