//import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const StudentNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-primary dark:bg-Dprimary text-background dark:text-Dbackground flex justify-between items-center px-10 py-4 shadow-md">
      {/* Logo - goes to student homepage */}
      <a href="#hero">
        <img src={logo} alt="Campus Hub Logo" className="w-20" />
      </a>

      {/* Section Links */}
      <div className="flex gap-8">
        <a href="#features" className="hover:underline">
          Features
        </a>
        <a href="#events" className="hover:underline">
          Events
        </a>
        <a href="#clubs" className="hover:underline">
          Clubs
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
      </div>
    </nav>
  );
};

export default StudentNavbar;
