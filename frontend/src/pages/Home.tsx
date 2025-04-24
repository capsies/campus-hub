// Home.js (Main Home Page)
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Events from "../components/Events";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <section id="heroA">
        <Hero />
      </section>
      <section id="featuresA">
        <Features />
      </section>
      <section id="eventsA">
        <Events />
      </section>
      <section id="aboutA">
        <About />
      </section>
      <Footer />
    </>
  );
};

export default Home;
