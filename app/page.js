import About from "@/components/About";
import HeroSection from "@/components/Hero";

const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
        <div id="about">
          <About />
        </div>
      </div>
    </>
  );
};

export default Home;
