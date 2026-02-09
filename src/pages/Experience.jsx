import React from "react";
import Title from "../components/Title";
import { motion } from "framer-motion";
import myExperiences from "@/data/experiences";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <div
      id="experience"
      className=" w-full p-5 lg:px-[80px] pt-[100px] md:px-[40px] h-auto ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.8 }}
      >
        <Title title={"My Experience"} />
        <div className="w-20 h-1 bg-[#fb8569] mt-5 mx-auto" />
      </motion.div>
      <div className="relative mt-20">
        {/* Timeline Line */}
        <motion.div
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#fb8569]/30 transform md:-translate-x-1/2"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ originY: 0 }}
        />

        {/* Timeline Items */}
        <div className="space-y-12">
          {myExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-6 bg-muted/50 rounded-xl border border-[#fb8569]/20 hover:border-[#fb8569]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {exp.type === "work" ? (
                      <Briefcase className="w-5 h-5 text-[#fb8569]" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-[#fb8569]" />
                    )}
                    <span className="text-sm text-[#fb8569]/60">{exp.period}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#fb8569] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-[#fb8569]/80 font-medium mb-2">{exp.company}</p>
                  <p className="text-[#fb8569]/60 text-sm">{exp.description}</p>
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <motion.div
                className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#000000] rounded-full border-4 border-[#fb8569]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.15 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      {/* <div className="w-full sm:pt-10">
        <div className="border-b-2 py-5 items-start flex  w-full justify-between border-pink">
          <div className="flex gap-2 flex-col  w-[70%]">
            <h1 className="md:text-2xl font-bold">Instructor at ETEC Center</h1>
            <p className="text-sm md:text-base">
              Teaching programming, web development, and computer science
              fundamentals while guiding students in real-world projects.
            </p>
          </div>
          <div>
            <div className="year font-bold md:text-2xl ">2024 - Present</div>
            <div className="text-sm md:text-base">Phnom Penh</div>
          </div>
        </div>
        <div className="border-b-2 py-5 items-start flex  w-full justify-between border-pink">
          <div className="flex gap-2 flex-col  w-[70%]">
            <h1 className="md:text-2xl font-bold">Instructor at ETEC Center</h1>
            <p className="text-sm md:text-base">
              Teaching programming, web development, and computer science
              fundamentals while guiding students in real-world projects.
            </p>
          </div>
          <div>
            <div className="year font-bold md:text-2xl ">2024 - Present</div>
            <div className="text-sm md:text-base">Phnom Penh</div>
          </div>
        </div>
        <div className="border-b-2 py-5 items-start flex  w-full justify-between border-pink">
          <div className="flex gap-2 flex-col  w-[70%]">
            <h1 className="md:text-2xl font-bold">Instructor at ETEC Center</h1>
            <p className="text-sm md:text-base">
              Teaching programming, web development, and computer science
              fundamentals while guiding students in real-world projects.
            </p>
          </div>
          <div>
            <div className="year font-bold md:text-2xl ">2024 - Present</div>
            <div className="text-sm md:text-base">Phnom Penh</div>
          </div>
        </div>
        <div className="border-b-2 py-5 items-start flex  w-full justify-between border-pink">
          <div className="flex gap-2 flex-col  w-[70%]">
            <h1 className="md:text-2xl font-bold">Instructor at ETEC Center</h1>
            <p className="text-sm md:text-base">
              Teaching programming, web development, and computer science
              fundamentals while guiding students in real-world projects.
            </p>
          </div>
          <div>
            <div className="year font-bold md:text-2xl ">2024 - Present</div>
            <div className="text-sm md:text-base">Phnom Penh</div>
          </div>
        </div>
      </div> */}

    </div>
  )
};

export default Experience;
