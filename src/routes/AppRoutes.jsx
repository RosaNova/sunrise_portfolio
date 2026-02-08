import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/AboutMe";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Education from "@/pages/Education";
import Experience from "@/pages/Experience";
import NotFound from "@/pages/NotFound";
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