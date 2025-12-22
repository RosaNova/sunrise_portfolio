import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";
import "./CardComponent.scss";
import { Link } from "react-router-dom";
const CardComponent = () => {
  return (
    <div className="md:w-[300px] w-[100%] md:min-w-[300px] group cursor-pointer z-0 h-[450px]  relative bg-transparent border-2 border-yellow overflow-hidden">
      <Link to={`/projectDetail/${10}`} className="absolute left-5 top-3">
        <IoIosInformationCircle className="text-3xl" />
      </Link>
      <a
        href="#"
        className="link absolute top-3 right-3 flex items-center text-3xl font-md"
      >
        [
        <MdArrowOutward className="group-hover:-translate-y-1 group-hover:translate-x-1 duration-500" />]
      </a>
      <img
        className="w-full absolute   z-[-1] h-full object-cover"
        src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1746026536/3e9cd927-2fd7-40b5-9baf-855e43d35a79.png"
        alt=""
      />
      <div className="layer h-auto  w-[95%] left-[9px] absolute bottom-[9px]  bg-greenMain group-hover:bottom-5 duration-500 flex flex-wrap justify-between items-center p-5">
        <ul className="flex gap-2  ">
          <li>
            <img
              className="tech-Stack"
              src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340708/698a42c0-1853-4a1c-9e83-35012ae3db3c.png"
              alt=""
            />
          </li>
          <li>
            <img
              className="tech-Stack"
              src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340621/ce5b34d0-abba-4a41-8a58-94c3554dae60.png"
              alt=""
            />
          </li>
          <li>
            <img
              className="tech-Stack"
              src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340600/fcc76bad-7ec7-4bb1-8cea-6589ab9a73ed.png"
              alt=""
            />
          </li>
        </ul>
        {/* <button type="button">
          <IoIosInformationCircle  className="text-5xl" />
        </button> */}
        <h1 className="text-2xl font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
          tempore!
        </h1>
        <p className="absolute right-10 bottom-5">2025</p>
      </div>
    </div>
  );
};

export default CardComponent;
