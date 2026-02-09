import React from "react";
import { motion } from "framer-motion";
const SkillsBlock = ({ title = "", description = "", Skill = [] }) => {
  return (
    <div
      key={title}
      className="group relative rounded-xl border border-[#fb8569]/60  bg-card overflow-hidden transition-all duration-300 hover:border-[#fb8569]/50 hover:shadow-xl hover:shadow-[#fb8569]/5"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      <div className="relative p-8 space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl text-[#fb8569] font-semibold tracking-tight">{title}</h3>
          <p className="text-sm text-[#fb8569]/80 group-hover:text-[#fb8569] transition-colors font-medium">{description}</p>
        </div>
        <div className="space-y-4">
          {Skill.map((skill, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-[#fb8569]/60 group-hover:bg-[#fb8569] transition-colors" />
              <div className="flex justify-between items-center px-1">
                <span className="text-sm text-[#fb8569] font-medium tracking-tight">{skill.name}</span>
              </div>
              <div className="h-1 w-full bg-[#fb8569]/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: 0.3 * 0.1, ease: "easeOut" }}
                  className="h-full bg-[#fb8569] rounded-full transition-all duration-1000 ease-out"
                />
              </div>
              <span className="text-xs text-[#fb8569]/70 font-mono">{skill.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsBlock;
