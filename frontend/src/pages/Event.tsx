import NavBar from "../components/NavBar";
import Events from "../components/Events";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Events />
      <div className="bg-background py-10 px-36 text-center">
        <button>View Details of any Academic Year</button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
