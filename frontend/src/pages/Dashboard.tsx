import React from "react";

interface User {
  name: string;
  email: string;
  role: string;
}

const Dashboard: React.FC = () => {
  // Mock user data (replace with actual data from your backend or context)
  const user: User = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Admin",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome, {user.name}!
        </h1>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Role:</span> {user.role}
        </p>
        <div className="mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Manage Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
