// Import necessary modules and hooks
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      //Sends a POST request to the backend API with the formData.
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );
      //Stores the JWT token received from the backend in the browser's localStorage for authentication purposes.
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup Error", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100 bg-cover bg-center auth-bg">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

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

        {/* Password*/}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2 w-full mb-2 rounded"
          required
        />
        {/* Role dropdown */}
        <label
          htmlFor="role"
          className="block text-sm font-medium text-gray-700 mb-1"
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

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
