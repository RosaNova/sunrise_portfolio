import React, { useEffect } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Button from "./button/Button";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      id="home"
      className="md:mt-[100px] mt-[105px]  p-[20px]  md:px-[50px] md:py-0 grid items-center grid-cols-1 grid-rows-1 md:grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 md:grid-rows-1 opacity-100 w-[90%] bg-[#001D21]  m-auto border-[#fb8569] border md:border-2 md:rounded-[30px]"
    >
      <div className="w-[100%] md:pt-10 sm:gap-4 h-full flex flex-col items-start justify-start flex-wrap">
        <h1 className="relative w-full text-main flex-col  flex text-start  leading-[70px]  sm:leading-[120px] md:leading-[100px] sm:text-[6.5em] text-[3em]  md:text-[7em] font-bold">
          Hello, I'm
          <span className="absolute md:right-[-10px] right-[0px] top-[-5px] md:top-0 text-xl flex">
            [Active{" "}
            <span className="bg-green-700 block w-[10px] rounded-full h-[10px]"></span>
            ]
          </span>
        </h1>
        <TypeAnimation
          className="sm:text-[6.5em] text-[3em]  md:text-[7em] font-bold"
          sequence={["Sun Rosa", 1000]}
          speed={10}
          repeat={Infinity}
          cursor={false}
        />
        <ul className="flex gap-5 border-t border-main pt-5">
          <li>
            <a className="text-5xl" href="#">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a className="text-5xl" href="#">
              <FaTelegram />
            </a>
          </li>
          <li>
            <a className="text-5xl" href="#">
              <FaInstagram />{" "}
            </a>
          </li>
        </ul>
        <div className="flex flex-wrap items-center pt-5  sm:p-0 md:gap-10">
          <Button
            className="after:border-2 text-[30px] after:border-main before:border-2 before:border-main"
            title={"Hire Me"}
          />
          <Button
            className="after:border-2 text-[30px] after:border-main before:border-2 before:border-main"
            title={"Download CV"}
          />
        </div>
      </div>
      <div className="h-full flex  py-0  justify-center items-center w-full   ">
        <img
          className=" md:w-[95%]  border-[20px] w-full h-[80%] border-[rgba(121,120,120,0.17)] z-[1]  object-cover object-top rounded-full"
          src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1751728163/photo_2025-07-05_22-01-11_idkhfe.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
