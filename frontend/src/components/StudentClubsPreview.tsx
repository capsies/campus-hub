import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type Club = {
  _id: string;
  name: string;
  description: string;
  image: string;
};

const StudentClubsPreview = () => {
  const [clubs, setClubs] = useState<Club[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/clubs");
        setClubs(res.data.slice(0, 3)); // Only first 3
      } catch (err) {
        console.error("Error fetching clubs", err);
      }
    };

    fetchClubs();
  }, []);

  const handleViewClub = (id: string) => {
    navigate(`/clubs/${id}`);
  };

  const handleSeeAll = () => {
    navigate("/clubs");
  };

  return (
    <section
      id="clubs"
      className="bg-background dark:bg-Dbackground py-16 px-10"
    >
      <div className="text-center mb-10">
        <h2 className="text-6xl font-semibold text-primary dark:text-Dprimary">
          Clubs
        </h2>
        <p className="text-lg text-text dark:text-Dtext mt-2">
          Discover active clubs in your college and join what inspires you!
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

      <div className="text-center mt-12">
        <button
          onClick={handleSeeAll}
          className="bg-accent text-primary dark:text-Dprimary px-10 py-3 rounded-xl text-xl font-medium hover:bg-accent-dark transition-colors"
        >
          See All Clubs
        </button>
      </div>
    </section>
  );
};

export default StudentClubsPreview;
