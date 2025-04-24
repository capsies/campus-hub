import heroBg from "../assets/Hero-bg.svg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  // Navigation Handlers
  const handleEvents = () => {
    navigate("/events");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="relative w-full h-screen bg-primary">
      {/* Background Image with 30% Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          opacity: "0.3",
        }}
      ></div>

      {/* Content - Stays Fully Visible */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {/* Heading */}
        <h1 className="text-9xl font-bold text-background">
          Welcome <span className="text-accent">Admin</span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-3xl text-background px-35 text-left">
          CampusHub simplifies departmental management by providing a
          centralized platform to track events, access records, and stay updated
          with ease. Stay organized, informed, and connected with CampusHub!
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-6">
          <button
            onClick={handleEvents}
            className="bg-accent text-primary px-6 py-2 rounded-lg text-2xl font-medium"
          >
            Check Events
          </button>
          <button
            onClick={handleDashboard}
            className="bg-primary text-accent border-2 border-accent px-6 py-2 rounded-lg text-2xl font-medium"
          >
            See Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
