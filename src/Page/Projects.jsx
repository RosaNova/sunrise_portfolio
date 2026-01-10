import React from "react";
import Title from "../components/Title";
import CardComponent from "../components/projects/CardComponent";
import Button from "../components/button/Button";
import { BsGithub } from "react-icons/bs";
import { motion} from "framer-motion";
import myProjects from "@/assets/data/myProjects";

function Projects() {
  return (
    <div
      id="project"
      className="project bg-black flex pb-20 flex-col xl:pt-[100px] h-auto justify-center items-center gap-5 w-[90%] mx-auto "
    >
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
         >
      <Title title={"My Project"} />
      <div className="w-20 h-1 bg-[#fb8569] mt-5  mx-auto" />
      </motion.div>
        <div className="grid gap-4 lg:pt-10 grid-cols-1 xl:gap-7 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
       {
          myProjects.map((item , index)=>(
             <CardComponent key={index} year={item.year} link={item.link}  techStack={item.techStack}  description={item.description} image={item.image}  />
          ))
       }
      </div>
      
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
      <Button
        title="See Github"
        icon={<BsGithub className="hover:text-black" />}
        className="after:border-2 text-[30px] hover:text-black  after:border-yellow text-yellow before:border-2 before:border-yellow"
      ></Button>
      </motion.div>
    </div>
  );
}

export default Projects;
