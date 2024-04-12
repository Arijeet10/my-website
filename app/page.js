"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useState } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection />
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
