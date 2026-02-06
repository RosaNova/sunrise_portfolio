import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/Page/Home";
import About from "@/Page/AboutMe";
import Skills from "@/Page/Skills";
import Projects from "@/Page/Projects";
import Contact from "@/Page/Contact";
import Education from "@/Page/Education";
import Experience from "@/Page/Experience";
import NotFound from "@/Page/NotFound";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      {/* 404 - Always last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;