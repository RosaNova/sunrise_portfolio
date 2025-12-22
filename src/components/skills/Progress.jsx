import React from "react";

const Progress = ({ skill = {} }) => {
  return (
    <div className="flex items-center text-pink w-full gap-4">
      <div className="md:w-[50px] w-[30px]">
        <img
          className="w-full h-full object-cover"
          src={skill.icon}
          alt={skill.name}
        />
      </div>
      <div className="flex-1 w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium md:text-lg">{skill.name}</span>
          <span className="md:text-sm  md:font-bold">{skill.percentage}%</span>
        </div>
        <div className="w-full border border-pink p-[0.5px] h-2 md:h-3 overflow-hidden">
          <div
            className="h-full bg-pink transition-all duration-1000 ease-out"
            style={{ width: `${skill.percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Progress;
