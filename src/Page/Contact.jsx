import React from "react";
import Title from "../components/Title";
import FormContact from "../components/Contact/FormContact"; // <-- Correct casing
import contactMe from "@/assets/data/contactMe";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div 
       id="Contact"
      className=" h-screen  md:pt-[150px]  md:pb-10  w-full lg:w-[90%] m-auto  bg-black"
    >
      <div className="lg:border-2 lg:px-[90px] md:px-10 px-4 lg:border-[#fb8569]/50  w-full h-full">
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
         >
      <Title title={"Contact Me"} />
      </motion.div>
      <div className="flex justify-between md:pt-[50px] md:py-10 lg:flex-row pt-5 md:flex-col gap-10 lg:gap-0 md:gap-14 items-start w-full flex-wrap">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
             className="lg:w-[45%] w-full  flex flex-wrap gap-2 md:gap-3 lg:gap-5">
          {
           contactMe.map((item , index)=>(
             <motion.a
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    target="_blank" href="#" className={`flex hover:bg-[#fb8569]/50 duration-200 ease-in-out items-center gap-1 py-3 md:py-2 border-2 px-3 border-[#fb8569] bg-[#fb8569]/10 text-[#fb8569]  ${item.parentClass}`}>
            <img
              className={item.size}
              src={item.icon}
              alt=""
            />
             {item.label}
          </motion.a>
           ))
          }
         
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-[45%]  w-full">
          <FormContact />
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
