import React, { useState } from "react";
import "../index.scss";
import Lottie from "lottie-react";
import Menu from "../assets/Menu.json";
import Close from "../assets/close.png";
import "./Navbar.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="w-full z-[1000] fixed top-0  pb-5 md:pb-10">
      <div className=" mt-5 top-0 left-[67px]   flex justify-between md:justify-between  shadow-md opacity-100 w-[90%] h-[80px] bg-[#001D21] m-auto border md:border-2 border-[#fb8569] md:rounded-[30px]">
        <nav className="navbar w-full m-auto  lg:block hidden">
          <ul className="flex w-full h-full justify-between items-center text-[#fb8569]">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link href="#aboutme">About Me</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#Testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>


        <nav
          className={clsx(
            "navbar navbar-Mobile bg-black py-10 h-full fixed left-0 top-0 z-10 lg:hidden",
            isOpen
              ? "translate-x-0 duration-300"
              : "translate-x-[-100%] duration-500"
          )}
        >
          <button
            className="float-end pr-7 font-bold"
            onClick={() => setOpen(false)}
          >
            <img className="w-6" src={Close} alt="" />
          </button>
          <ul className="flex flex-col gap-5 w-full justify-around items-center text-[#fb8569]">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutme">About Me</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#Testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a
          className="lg:hidden flex justify-center group items-center pl-5"
          href="#home"
        >
          <img
            className="h-[55px] group-hover:rotate-[360deg] duration-300 w-[55px] object-cover rounded-full"
            src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1751728163/photo_2025-07-05_22-01-11_idkhfe.jpg"
            alt="Logo"
          />
        </a>
        <button
          type="button"
          className="lg:hidden mt-[-10px] w-[100px] h-[100px] items-center ml-[100px] md:ml-0 flex justify-center"
          onClick={() => setOpen(true)}
        >
          <Lottie
            className="w-[200px] absolute right-[-50px] md:right-0 h-[200px]"
            animationData={Menu}
          />
        </button>
      </div>
    
    </div>
  );
};

export default Navbar;
