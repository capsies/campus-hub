// Import necessary modules and hooks
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authBg from "../assets/authBackground.jpg";
import logo from "../assets/Logo.svg";

const SignIn = () => {
  const navigate = useNavigate(); // Hook to navigate to different routes
  const [formData, setFormData] = useState({ email: "", password: "" });

  //Function to handle input changes and update the formData state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)
    try {
      // Sends a POST request to the backend API with the formData
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin", // Backend API endpoint
        formData // Data to be sent as the request body
      );
      // Store the JWT token received from the backend in localStorage
      localStorage.setItem("token", response.data.token);
      // Navigate to the dashboard route after successful login
      navigate("/dashboard");
    } catch (error) {
      console.error("Sign-in Error", error);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10">
        <img alt="Logo" src={logo} />
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-96"
        >
          {/* Form heading */}
          <h2 className="text-2xl font-semibold mb-4">Sign In</h2>

          {/* Email input field */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-2 w-full mb-2 rounded"
            required
          />

          {/* Password input field */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border p-2 w-full mb-2 rounded"
            required
          />

          {/* Sign In button */}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
