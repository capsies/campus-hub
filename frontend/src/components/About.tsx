// components/About.js
const About = () => {
  return (
    <div className="bg-background py-10 px-36 text-center">
      <div className="bg-primary p-6 text-background">
        <h2 className="text-5xl font-medium">About Us</h2>
        <p className="mt-7 text-2xl mx-6 text-left">
          Hey there! We're a small team of final-year Computer science students
          building CampusHub to replace the current manual system for managing
          departmental activities. Our goal? To make managing multiple
          departmental activities easier, more organized, and a little less
          chaotic.
          <p>
            (And yes, it’s way better than flipping through dusty old records!
            😉)
          </p>
          <p className="mt-7 mb-4"> GCET Website : https://gcet.edu.in/</p>
        </p>
      </div>
    </div>
  );
};

export default About;
