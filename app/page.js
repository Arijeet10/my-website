import About from "@/components/About";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  return ( 
    <>
      <div>
        <Navbar />
        <HeroSection />
        <About />
      </div>
    </>
   );
}
 
export default Home;