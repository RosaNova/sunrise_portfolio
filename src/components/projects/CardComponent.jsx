import React from "react";
import "./CardComponent.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";
import { useDisclosure } from "@heroui/react";
import ProjectModal from "../ui/modal";

const CardComponent = ({ link, image, techStack, description, year, title }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + 0.1 }}
      className="md:w-[300px] p-3 w-full xl:min-w-[335px] md:min-w-[300px] group cursor-pointer z-0 h-[450px]  relative bg-black border border-[#fb8569]/70 overflow-hidden">
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={onOpen}
        className="absolute top-3 z-40 left-3 w-8 h-8 rounded-full bg-[#fb8569] flex items-center justify-center text-black shadow-md"
      >
        <Info size={16} />
      </motion.button>
      {/* Link Icon - Top Right */}
      <motion.a
        href={link}
        whileHover={{ scale: 1.1 }}
        className="absolute text-[#fb8569] z-50 top-3 right-3  font-mono text-xl flex items-center gap-0.5"
      >
        <span className="opacity-60">[</span>
        <ExternalLink size={14} className="mx-0.5" />
        <span className="opacity-60">]</span>
      </motion.a>
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className="w-full opacity-50 object-top  h-full object-cover"
        src={image}
        alt=""
      />
      <div className="layer h-auto  w-full left-0 text-black absolute bottom-0  bg-[#fb8569]  flex flex-wrap justify-between items-center p-5">
        <ul className="flex gap-2 mb-2 ">
          {
            techStack.map((item, index) => (
              <li className="bg-black text-[#fb8569]  px-1  rounded-md" key={index}>
                {item}
              </li>
            ))
          }

        </ul>
        <h1 className="text-sm font-bold pb-2">
          {description}
        </h1>
        <p className="bg-black text-[#fb8569] px-2">{year}</p>
      </div>
      <ProjectModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        title={description ? description.substring(0, 30) + "..." : "Project Details"} // Fallback title
        description={description}
        techStack={techStack}
        link={link}
      />
    </motion.div>
  );
};

export default CardComponent;
