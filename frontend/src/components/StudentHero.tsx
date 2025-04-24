import heroBg from "../assets/Hero-bg.svg";
import { useNavigate } from "react-router-dom";

const StudentHero = () => {
  const navigate = useNavigate();

  const handleEvents = () => {
    navigate("/student-home#events");
  };

  const handleDashboard = () => {
    navigate("/student-dashboard");
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

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {/* Title */}
        <h1 className="text-9xl font-bold text-background">
          Campus<span className="text-accent">Hub</span>
        </h1>

        {/* Student-Focused Description */}
        <p className="mt-8 text-3xl text-background px-36 max-w-6xl text-left">
          Welcome to your student portal. Discover campus events, join clubs,
          track your participation, and stay engaged with everything your
          college life offers — all in one place!
        </p>

        {/* Action Buttons */}
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

export default StudentHero;
