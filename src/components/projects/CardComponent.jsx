import React from "react";
import "./CardComponent.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";
const CardComponent = () => {
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
                    href="#"
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
        src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1746026536/3e9cd927-2fd7-40b5-9baf-855e43d35a79.png"
        alt=""
      />
      <div className="layer h-auto  w-[95%] left-[9px] text-black absolute bottom-[9px]  bg-[#fb8569]/80  flex flex-wrap justify-between items-center p-5">
        <ul className="flex gap-2  ">
          <li>
            <img
              className="tech-Stack"
              src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340708/698a42c0-1853-4a1c-9e83-35012ae3db3c.png"
              alt=""
            />
          </li>
          <li>
            <img
              className="tech-Stack"
              src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340621/ce5b34d0-abba-4a41-8a58-94c3554dae60.png"
              alt=""
            />
          </li>
          <li>
            <img
              className="tech-Stack"
              src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340600/fcc76bad-7ec7-4bb1-8cea-6589ab9a73ed.png"
              alt=""
            />
          </li>
        </ul>
        {/* <button type="button">
          <IoIosInformationCircle  className="text-5xl" />
        </button> */}
        <h1 className="text-2xl font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
          tempore!
        </h1>
        <p className="absolute right-10 bottom-5">2025</p>
      </div>
    </motion.div>
  );
};

export default CardComponent;
