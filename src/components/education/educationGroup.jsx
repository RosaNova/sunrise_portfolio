import React from "react";

const educationGroup = ({
  year = "",
  school = "",
  specialization = "",
  path = "",
}) => {
  return (
    <div className="border-t-2 flex justify-between py-5 border-main text-main w-[90%] m-auto">
      <div className="block-left text-start flex flex-col justify-start items-start">
        <h1 className="md:text-2xl  font-bold">{specialization}</h1>
        <p className="text-sm">[ {path} ]</p>
      </div>
      <div className="block-right flex flex-col text-end justify-end items-end">
        <h1 className="md:text-2xl font-bold">{year}</h1>
        <h1 className="md:text-2xl font-bold">{school}</h1>
      </div>
    </div>
  );
};

export default educationGroup;
