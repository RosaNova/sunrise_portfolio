import React from "react";
import Progress from "./Progress";
const SkillsBlock = ({ title = "", Skill = [] }) => {
  return (
    <div className="item md:w-full w-full justify-start items-start  text-pink flex-col flex">
      <h1 className="text-pink text-xl md:text-2xl font-bold pb-[20px]">{title}</h1>
      <div className="flex w-full flex-col gap-5">
        {Skill.map((item, idx) => (
          <Progress key={idx} skill={item} />
        ))}
      </div>
    </div>
  );
};

export default SkillsBlock;
