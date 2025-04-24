import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type Club = {
  _id: string;
  name: string;
  description: string;
  image: string;
};

const AllClubs = () => {
  const [clubs, setClubs] = useState<Club[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/clubs");
        setClubs(res.data);
      } catch (err) {
        console.error("Error fetching clubs", err);
      }
    };

    fetchClubs();
  }, []);

  const handleViewClub = (id: string) => {
    navigate(`/clubs/${id}`);
  };

  return (
    <div className="bg-background dark:bg-Dbackground min-h-screen py-16 px-10">
      <button
        onClick={() => navigate("/student-home")}
        className="mb-6 bg-primary text-background dark:text-Dbackground px-4 py-2 rounded"
      >
        ← Back to Home
      </button>
      <div className="text-center mb-10">
        <h2 className="text-6xl font-semibold text-primary dark:text-Dprimary">
          All Clubs
        </h2>
        <p className="text-lg text-text dark:text-Dtext mt-2">
          Explore all the clubs available in your college community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubs.map((club) => (
          <div
            key={club._id}
            className="border border-primary dark:border-Dprimary rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={club.image}
              alt={club.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary dark:text-Dprimary mb-2">
                {club.name}
              </h3>
              <p className="text-text dark:text-Dtext mb-4">
                {club.description}
              </p>
              <button
                onClick={() => handleViewClub(club._id)}
                className="bg-primary dark:bg-Dprimary text-background dark:text-Dbackground px-6 py-2 rounded-lg hover:bg-accent dark:hover:bg-Daccent transition-colors"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClubs;
