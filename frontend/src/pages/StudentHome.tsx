import StudentNavbar from "../components/StudentNavbar";
import StudentHero from "../components/StudentHero";
import StudentFeatures from "../components/StudentFeatures";
import StudentClubsPreview from "../components/StudentClubsPreview";
import StudentEventsPreview from "../components/StudentEventsPreview";
import About from "../components/About";
import Footer from "../components/Footer";

const StudentHome = () => {
  return (
    <>
      <StudentNavbar />
      <section id="hero">
        <StudentHero />
      </section>
      <section id="features">
        <StudentFeatures />
      </section>
      <section id="clubs">
        <StudentClubsPreview />
      </section>
      <section id="events">
        <StudentEventsPreview />
      </section>
      <section id="about">
        <About />
      </section>
      <Footer />
    </>
  );
};

export default StudentHome;
