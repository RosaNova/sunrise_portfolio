import React from "react";
import Title from "../components/Title";
import Soccer from "../assets/Soccer Ball.json";
import Lottie from "lottie-react";
import Travel from "../assets/PluLPGMOuF.json";
import Book from "../assets/Open book.json";
import Gym from "../assets/MrSNWzJYmf.json";
import Writing from "../assets/Writing in Navy.json";
import Cycling from "../assets/Cycling.json";
import Climb from "../assets/Rock Climbing.json";
const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="about-me  bg-greenMain  w-full  sm:mt-[100px] p-[0px_10px_50px_10px] sm:p-[0px_40px_50px_40px] md:p-[0px_67px_100px_67px] "
    >
      <Title title="About Me" />
      <p className="text-center pb-10 text-md text-main">Who I Am</p>
      <div className="flex w-full justify-between gap-10 flex-wrap">
        <div className="md:w-[47%] w-full">
          <p className="pb-3">
            I’m a passionate Web Developer with a strong focus on designing and
            building modern, high-performance websites and applications. With
            solid experience in HTML, CSS, JavaScript, React.js, Vue.js, PHP,
            and MySQL, I love turning creative ideas into real, efficient, and
            scalable digital solutions.
          </p>
          <p className="pb-3">
            Beyond development, I have a strong interest in UI/UX design,
            ensuring every project I create is not only functional but also
            visually engaging. I enjoy building interactive interfaces,
            improving performance, and crafting responsive layouts that adapt
            seamlessly to all devices.
          </p>
          <p className="pb-3">
            I'm committed to continuous learning, always staying up-to-date with
            the latest technologies and pushing myself with new challenges to
            grow as a developer and create meaningful user experiences.
          </p>
          <p className="text-md text-center pb-10">
            "I believe in coding with purpose and designing with empathy."
          </p>
        </div>
        <div className="md:w-[47%] w-full">
          <div className="w-full">
            <h1 className="text-xl font-bold underline">Personal Details</h1>
            <ul className="py-5">
              <li className="font-[500]">
                FullName : <span className="font-[300] pl-10">Sun Rosa</span>
              </li>

              <li className="font-[500]">
                Date of Birth :
                <span className="font-[300] pl-5">December 10, 2004</span>{" "}
              </li>
              <li className="font-[500]">
                Address :
                <span className="font-[300] pl-[55px]">
                  Kompong Cham, Cambodia
                </span>
              </li>
              <li className="font-[500]">
                Email :{" "}
                <span className="font-[300] pl-[72px]">
                  rozasun61@gmail.com
                </span>
              </li>
              <li className="font-[500]">
                Phone :{" "}
                <span className="font-[300] pl-[65px]">+855 972 349 164</span>
              </li>
              <li className="font-[500]">
                Languages :
                <ul className="pl-10">
                  <li className="font-[300]">Khmer(Native)</li>
                  <li className="font-[300]">English</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold underline">My Interests</h1>
            <div className="flex justify-start mt-5 gap-2 flex-wrap items-center">
              <div className="flex justify-center bg-main  px-2 rounded-xl items-center">
                <Lottie className="w-10 mb-2" animationData={Soccer} />
                <p className="text-black text-md font-md">Football</p>
              </div>
              <div className="flex justify-center py-[12px] relative overflow-hidden pr-3 bg-main pl-[50px]  rounded-xl items-center">
                <Lottie
                  className="w-20 absolute  left-[-10px]"
                  animationData={Book}
                />
                <p className="text-black text-md font-md">Reading Book</p>
              </div>
              <div className="flex justify-center bg-main py-[6px] px-2 rounded-xl items-center">
                <Lottie className="w-8 mb-1" animationData={Travel} />
                <p className="text-black text-md font-md">Traveling</p>
              </div>
              <div className="flex justify-center bg-main py-[3px]  px-2 rounded-xl items-center">
                <Lottie className="w-10 mb-1" animationData={Gym} />
                <p className="text-black text-md font-md">Gym</p>
              </div>
              <div className="flex justify-center bg-main py-[3px]  px-2 rounded-xl items-center">
                <Lottie className="w-10 mb-0" animationData={Writing} />
                <p className="text-black text-md font-md">Writing Ideas</p>
              </div>
              <div className="flex justify-center bg-main py-[3px]  px-2 rounded-xl items-center">
                <Lottie className="w-10 " animationData={Cycling} />
                <p className="text-black text-md font-md">Cycling</p>
              </div>
              <div className="flex justify-center bg-main py-[9px] gap-2 px-2 rounded-xl items-center">
                <Lottie className="w-7 " animationData={Climb} />
                <p className="text-black text-md font-md">
                  Trying New Adventures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
