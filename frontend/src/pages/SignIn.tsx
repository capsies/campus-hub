// Import necessary modules and hooks
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authBg from "../assets/authBackground.jpg";
import logo from "../assets/Logo.svg";

const SignIn = () => {
  const navigate = useNavigate(); // Hook to navigate between routes
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin",
        formData
      );

      // Store token & user data in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user details

      const { role } = response.data.user;

      if (role === "admin") {
        navigate("/home");
      } else {
        navigate("/student-home");
      }
    } catch (error) {
      console.error("Sign-in Error", error);
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        navigate("/signup");
      }
    }
  };

  return (
    <div
      className="flex flex-col justify-center w-screen h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Logo */}
        <div className="w-[150px] h-20 fixed top-[40px] left-[80px]">
          <img className="w-full h-full object-contain" alt="Logo" src={logo} />
        </div>

        {/* Form */}
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-background dark:bg-Dbackground p-20 rounded-3xl flex flex-col items-center"
          >
            <div className="flex flex-col items-center">
              {/* Form heading */}
              <h2 className="text-primary dark:text-primary text-2xl font-semibold mb-4">
                Sign In To CampusHub
              </h2>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="border p-2 w-full mb-2 rounded"
                required
              />

              {/* Password */}
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
                className="bg-primary dark:bg-Dprimary text-background dark:text-Dbackground px-[115px] py-[10px] rounded-xl font-medium font-body"
              >
                Sign In
              </button>
            </div>

            {/* Sign-up link */}
            <p className="text-text dark:text-Dtext mt-4">
              Don't have an account?{" "}
              <a
                className="underline decoration-accent dark:decoration-Daccent cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Sign-up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
