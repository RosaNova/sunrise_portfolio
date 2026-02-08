import React from "react";
import Title from "../components/Title";
import FormContact from "../components/Contact/FormContact";
import contactMe from "@/data/contactMe";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div
      id="Contact"
      className="w-full px-5 lg:px-[80px]  lg:overflow-hidden lg:pt-[140px] lg:pb-[80px]  pt-[100px] h-screen bg-black"
    >
      <div className="lg:border-2  md:px-10 lg:border-[#fb8569]/50   w-full h-full ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title title={"Contact Me"} />
        </motion.div>
        <div className="flex h-full justify-between md:pt-[50px] md:py-10 lg:flex-row pt-5 md:flex-col gap-10 lg:gap-0 md:gap-14 items-start w-full flex-wrap">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-[45%] w-full  flex flex-wrap gap-2 md:gap-3 justify-center items-center">
            {
              contactMe.map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  target="_blank" href="#" className={`flex hover:text-[#fb8569]/50 hover:border-[#fb8569]/20 duration-200 ease-in-out items-center gap-1  md:py-2 border px-3 border-[#fb8569]/50 text-[#fb8569]/70  ${item.parentClass}`}>
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
            className="lg:w-[45%] pb-10 lg:pb-0  w-full">
            <FormContact />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
