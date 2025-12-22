import React from "react";
import { IoMdStar } from "react-icons/io";

const TestimonialCard = () => {
  return (
    <div className="border p-10 w-full  lg:w-[350px] bg-greenMain relative">
      <div className="absolute top-[-50px] left-5 bg-yellow text-black px-5 py-2">
        <h1 className="text-xl font-bold">Sun Rosa</h1>
        <p>Software Engineer</p>
        <p className="text-[12px]" >Phnom Penh, <span>Cambodia</span></p>
      </div>
      <div className="absolute top-[-40px] right-5">
        <img
          className="w-[70px] h-[70px] rounded-full object-cover"
          src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1746976911/5af481a6-0bd7-4184-91ee-99e554fe4e0f.png"
          alt=""
        />
      </div>
      <div className="w-full pl-5 mt-3 border-l-2 flex flex-col justify-start">
        <ul className="flex justify-start items-center gap-2">
          <li>
            <IoMdStar />
          </li>
          <li>
            {" "}
            <IoMdStar />
          </li>
          <li>
            {" "}
            <IoMdStar />
          </li>
        </ul>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          magni nostrum dolorem. Eos rerum mollitia nesciunt aspernatur ex
          aliquam laboriosam.
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
