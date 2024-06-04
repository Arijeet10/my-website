"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useState } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <div className={`${darkMode && "dark"} `}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection />
        <div id="about" className="p-4 dark:bg-[#240750] dark:text-white">
          <About />
        </div>
        <div id="projects" className="p-4 dark:bg-[#240750] dark:text-white">
          <Projects />
        </div>
        <div id="contact" className="p-4 dark:bg-[#240750] dark:text-white">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
