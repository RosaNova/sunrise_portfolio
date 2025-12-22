import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import Song from "../components/Song";
import About from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Education from "./Education";
import Experience from "./Experience";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
const Home = () => {
  return (
    <div className=" overflow-hidden">
      <div className="FirstPage text-main py-10 ">
        <Song />
        <Navbar />
        <HeroSection />
        <About />
        <Education />
      </div>
      <div className="SecondPage  m-0  text-pink">
        <Experience />
        <Skills />
      </div>

      <div className="ThirtPage pb-10 m-0 bg-greenMain text-yellow ">
        <Projects />
         <Blog/>
        <Testimonials />
      </div>
      <div className="FourthPage w-full pt-20 h-auto text-primary">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
