import React from "react";
import "./CardComponent.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";
const CardComponent = ({link , image , techStack, description , year }) => {
  return (
    <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + 0.1 }}
               className="md:w-[300px] w-full xl:min-w-[335px] md:min-w-[300px] group cursor-pointer z-0 h-[450px]  relative bg-black border-[3px] border-[#fb8569]/70 overflow-hidden">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#fb8569] flex items-center justify-center text-black shadow-md"
                  >
                    <Info size={16} />
                  </motion.button>
       {/* Link Icon - Top Right */}
                  <motion.a
                    href={link}
                    whileHover={{ scale: 1.1 }}
                    className="absolute text-[#fb8569] top-3 right-3  font-mono text-xl flex items-center gap-0.5"
                  >
                    <span className="opacity-60">[</span>
                    <ExternalLink size={14} className="mx-0.5" />
                    <span className="opacity-60">]</span>
                  </motion.a>
      <motion.img 
          whileHover={{ scale: 1.05 }}
         transition={{ duration: 0.4 }}

        className="w-full absolute opacity-50  z-[-1] h-full object-cover"
        src={image} 
        alt=""
      />
      <div className="layer h-auto  w-[95%] left-[9px] text-black absolute bottom-[9px]  bg-[#fb8569]/80  flex flex-wrap justify-between items-center p-5">
        <ul className="flex gap-2  ">
          {
            techStack.map((item , index)=>(
             <li key={index}>
                {item}
             </li>
            ))
          }

        </ul>
        {/* <button type="button">
          <IoIosInformationCircle  className="text-5xl" />
        </button> */}
        <h1 className="text-2xl font-bold">
        {description}
        </h1>
        <p className="absolute right-10 bottom-5">{year}</p>
      </div>
    </motion.div>
  );
};

export default CardComponent;
