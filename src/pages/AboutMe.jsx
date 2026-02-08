import React, { useRef } from "react";
import Title from "../components/Title";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { myInterest } from "@/data/myInterest";

const AboutMe = () => {

  return (
    <div
      id="aboutme"
      className="about-me   bg-greenMain  w-full  h-screen  sm:mt-[100px] p-[0px_10px_50px_10px] sm:p-[0px_40px_50px_40px] md:p-0 md:m-0"
    >
      <div className="w-[90%] mx-auto pt-[100px] pb-10 md:pb-0">
        <motion.div
          className="text-[#fb8569]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title title="About Me" />
          <p className="text-center md:mt-[20px]  text-md ">Who I Am</p>
        </motion.div>

        <div className="flex w-full pt-10 justify-between gap-10 flex-wrap">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-[47%] text-[#fb8569]  w-full">
            <p className="pb-3 ">
              I’m a passionate <span className="font-bold "> Web Developer </span> with a strong focus on designing and
              building modern, high-performance websites and applications. With
              solid experience in HTML, CSS, JavaScript, React.js, Vue.js, PHP,
              and MySQL, I love turning creative ideas into real, efficient, and
              scalable digital solutions.
            </p>
            <p className="pb-3">
              Beyond development, I have a strong interest in <span class="font-bold  text-main/80" >UI/UX design</span>,
              ensuring every project I create is not only functional but also
              visually engaging. I enjoy building interactive interfaces,
              improving performance, and crafting responsive layouts that adapt
              seamlessly to all devices.
            </p>
            <p className="pb-3">
              I'm committed to continuous learning, always staying up-to-date with
              the latest technologies and pushing myself with new challenges to
              grow as a developer and create meaningful user experiences.
            </p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}

              className="text-md text-center md:pb-10">
              "I believe in coding with purpose and designing with empathy."
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-[47%]  text-[#fb8569] w-full">
            <div className="w-full">
              <h1 className="text-xl font-bold underline">Personal Details</h1>
              <ul className="py-5">
                <li className="font-[500]">
                  FullName : <span className="font-[300]  pl-5 md:pl-10">Sun Rosa</span>
                </li>

                <li className="font-[500]">
                  Date of Birth :
                  <span className="font-[300] pl-5 md:pl-10">December 10, 2004</span>{" "}
                </li>
                <li className="font-[500]">
                  Address :
                  <span className="font-[300] pl-5 md:pl-[55px]">
                    Kompong Cham, Cambodia
                  </span>
                </li>
                <li className="font-[500]">
                  Email :{" "}
                  <span className="font-[300] pl-5 md:pl-[72px]">
                    rozasun61@gmail.com
                  </span>
                </li>
                <li className="font-[500]">
                  Phone :{" "}
                  <span className="font-[300] pl-5 md:pl-[65px]">+855 972 349 164</span>
                </li>
                <li className="font-[500] flex ">
                  Languages :
                  <ul className="md:pl-10 pl-5">
                    <li className="font-[300]">Khmer(Native)</li>
                    <li className="font-[300]">English</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-bold underline">My Interests</h1>
              <div className="flex justify-start mt-5 gap-2 flex-wrap items-center">
                {myInterest.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`flex justify-center bg-transparent border-2 border-[#fb8569]/60 text-main  gap-2  rounded-xl items-center ${item.parent}`}
                    >
                      <Lottie
                        className={item.class}
                        animationData={item.icon}
                      />
                      <p className="text-md font-md">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
