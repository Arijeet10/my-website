import About from "@/components/About";
import HeroSection from "@/components/Hero";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
    </>
  );
};

export default Home;
