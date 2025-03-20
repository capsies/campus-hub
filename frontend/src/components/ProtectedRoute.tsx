// Import necessary modules
import { jwtDecode } from "jwt-decode"; // Library to decode JWT tokens &extract payload
import { Outlet, Navigate } from "react-router-dom"; // React Router components for routing...Outlet to render child routes, Navigate to redirect to a different route

const ProtectedRoute = () => {
  // Retrieve the JWT token from localStorage... if there user is authenticated
  const token = localStorage.getItem("token");
  let isValid = false; // Variable to track if the token is valid

  if (token) {
    try {
      // Decode the token to extract its payload
      const decodedToken = jwtDecode(token);

      // Get the current time in seconds
      const currentTime = Date.now() / 1000;

      // Validate the token: Check if it has an expiration time and if it is not expired
      isValid =
        typeof decodedToken.exp === "number" && decodedToken.exp > currentTime;
    } catch (error) {
      // Log an error if the token is invalid or cannot be decoded
      console.error("Invalid token", error);
    }
  }

  // Render the child route(s) if the token is valid, otherwise redirect to the sign-in page
  return isValid ? <Outlet /> : <Navigate to="/signin" />;
};

// Export the ProtectedRoute component for use in routing configuration
export default ProtectedRoute;
