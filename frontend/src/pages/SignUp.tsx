// Import necessary modules and hooks
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authBg from "../assets/authBackground.jpg";
import logo from "../assets/Logo.svg";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  // Update formData variable when input changes...either input field or dropdown select
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //e.preventDefault(): Prevents the default form submission behavior (page reload).
  //Handle form submission... This function will be called when the form is submitted
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
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
      console.error("Signup Error", error);
    }
  };

  return (
    <div
      className="flex flex-col justify-center w-screen h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Logo */}
        <div className="w-[150px] h-20 fixed top-[40px] left-[80px]">
          <img className="w-full h-full object-contain" alt="Logo" src={logo} />
        </div>

        {/* Form */}
        <div className="flex justify-center items-center ">
          <form
            onSubmit={handleSubmit}
            className="bg-background dark:bg-Dbackground p-20 rounded-3xl flex flex-col items-center"
          >
            <div className="flex flex-col items-center w-full">
              {/* Form heading */}
              <h2 className="text-primary dark:text-primary text-2xl font-semibold mb-4">
                Sign Up To CampusHub
              </h2>

              {/* Input fields wrapper */}
              <div className="flex flex-col items-center justify-center w-full">
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  className="border p-2 w-full mb-2 rounded"
                  required
                />

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
              </div>

              {/* Role label + Dropdown */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text- mb-1 text-left"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  onChange={handleChange}
                  className="border p-2 w-full mb-2 rounded"
                >
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="bg-primary dark:bg-Dprimary text-background dark:text-Dbackground px-[115px] py-[10px] rounded-xl font-medium font-body"
              >
                Sign Up
              </button>
            </div>
            <p className="text-text dark:text-Dtext mt-4">
              Already have an account?{" "}
              <a
                className="underline decoration-accent dark:decoration-Daccent"
                onClick={() => navigate("/signin")}
              >
                Sign-in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
