import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000") //Backend API endpoint
      .then((response) => setMessage(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">Campus Hub</h1>
      <p className="mt-2 text-gray-700">{message}</p>
    </div>
  );
};

export default App;
