import React, { useState } from "react";
import "../index.scss";
import Lottie from "lottie-react";
import Menu from "../data/Menu.json";
import Close from "../assets/close.png";
import "./Navbar.scss";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "@/data/navLinks";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full bg-black z-30 pb-5 md:pb-10"
      >


        <div className=" md:mt-5 border-b-2  relative top-0  flex justify-between  shadow-md opacity-100 md:w-[90%] w-full h-[80px] m-auto  md:border-2 border-[#fb8569]/50 ">

          <nav className=" w-full h-full  m-auto lg:block hidden">
            <ul className="flex link-navbar   w-full h-full justify-center items-center text-[#fb8569]">
              {navLinks.map((item, index) => (
                <motion.li
                  key={index}
                  className="link-item"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      isActive
                        ? "link active"
                        : "link hover:text-[#fb8569] relative after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-[#fb8569] after:transition-all after:duration-300"
                    }
                  >
                    {item.name}
                  </NavLink>

                </motion.li>
              ))}
            </ul>
          </nav>

          <nav
            className={clsx(
              "fixed top-0 left-0 h-screen  w-full bg-black py-10 z-50 lg:hidden transform transition-transform duration-300 ease-in-out",
              isOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >

            <button
              className="float-end pr-7 absolute top-5 right-5 font-bold"
              onClick={() => setOpen(false)}
            >
              <img className="w-6" src={Close} alt="" />
            </button>
            <ul className="flex flex-col gap-5 w-full pt-20 justify-center  items-center text-[#fb8569]">
              {
                navLinks.map((item) => (
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    // end={item.path === "/"}
                    className="text-[#fb8569] p-2 hover:text-[#fb8569]/50 duration-300"
                  >
                    {item.name}
                  </NavLink>
                ))
              }
            </ul>
          </nav>
          {/* {isOpen && (
            <div
              className="fixed inset-0 bg-black/80 z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />
          )} */}
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
      </motion.nav>
    </>
  );
};

export default Navbar;
