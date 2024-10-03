import Carousal from "../components/Carousal";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Carousal/>
      <Footer/>
    </div>
  );
};

export default Home;
