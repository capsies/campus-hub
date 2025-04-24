// components/NavBar.js
//import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-primary dark:bg-Dprimary text-background dark:text-Dbackground flex justify-between items-center px-10 py-4 shadow-md">
      <a href="#heroA">
        <img src={logo} alt="Campus Hub Logo" className="w-20" />
      </a>
      <div className="flex gap-8">
        <a href="#featuresA" className="hover:underline">
          Features
        </a>
        <a href="#eventsA" className="hover:underline">
          Events
        </a>
        <a href="#aboutA" className="hover:underline">
          About
        </a>
        <a href="#aboutA" className="hover:underline">
          Clubs
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
