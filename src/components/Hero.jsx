import React, { useEffect } from "react";
import Button from "./button/Button";
import { motion } from "framer-motion";
import { socialMediaLinks } from "../data/socialMediaLinks";
const Hero = () => {
  return (
    <div
      id="home"
      className="md:mt-[100px] p-10 mt-[30px] w-ful h-full md:h-[85%]  md:p-[50px]  grid items-center grid-cols-1 grid-rows-1 md:grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 md:grid-rows-1 opacity-100 md:w-[90%]   m-auto border-[#fb8569]/50  md:border-2 "
    >
      <div className="w-full gap-0 sm:gap-4 h-full flex flex-col items-start justify-center md:justify-start">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="md:text-xl text-[15px] text-[#fb8569] pb-5 md:pb-0 font-bold flex">
          [Active{" "}
          <span className="bg-green-700 animate-pulse block w-[10px] rounded-full h-[10px]"></span>
          ]
        </motion.span>
        <motion.h1

          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative  w-full text-[#fb8569] text-main flex-col   flex text-start  leading-[30px]  sm:leading-[120px] md:leading-[45px] sm:text-[1em] text-[1em]  md:text-[2em] font-bold">
          Hi, I’m Sun Rosa. I build web and mobile applications that not only run efficiently under the hood but also provide seamless, user-friendly experiences.
        </motion.h1>

        <motion.div
          className="w-20 my-4 md:my-0 h-1 bg-[#fb8569]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ originX: 0 }}
        />

        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {socialMediaLinks.map((item, index) => {
            const Icon = item.icon;

            return (

              <a
                target="_blank"
                key={index}
                href={item.src}
                className="text-[#fb8569] hover:text-coral-light transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="text-3xl cursor-pointer" />
              </a>

            );
          })}
        </motion.div>


        <motion.div

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-between md:justify-start w-[30%] md:items-center mt-10 sm:p-0 md:gap-10">
          <Button
            href="https://t.me/rosasun222"
            className="after:border-2  w-full text-[30px] after:border-main before:border-2 before:border-main"
            title={"Let’s Talk"}
          />
          <Button
            href=""
            className="after:border-2 w-full text-[30px] after:border-main before:border-2 before:border-main"
            title={"Resume"}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="h-full flex  py-0  justify-center items-center w-full   ">
        <img
          className=" md:w-[70%] 2xl:w-[70%]  lg:h-[90%] 2xl:h-[95%]  w-[95%] xl:w-[73%]   border-[20px] md:h-full  h-[80%] border-[#fb8569]/40 z-[1]  object-cover object-top rounded-full"
          src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1751728163/photo_2025-07-05_22-01-11_idkhfe.jpg"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Hero;
