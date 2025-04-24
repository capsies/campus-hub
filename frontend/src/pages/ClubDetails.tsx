import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type Club = {
  _id: string;
  name: string;
  description: string;
  image: string;
};

type Event = {
  _id: string;
  title: string;
  description: string;
  date: string;
  type: string;
  speaker: string;
  image: string;
};

const ClubDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [club, setClub] = useState<Club | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clubRes = await axios.get(
          `http://localhost:5000/api/clubs/${id}`
        );
        setClub(clubRes.data);

        const eventsRes = await axios.get(
          `http://localhost:5000/api/events/club/${id}`
        );
        setEvents(eventsRes.data);
      } catch (err) {
        console.error("Error loading club or events", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading || !club)
    return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="bg-background dark:bg-Dbackground min-h-screen p-10">
      <button
        onClick={() => navigate("/clubs")}
        className="mb-6 bg-primary text-background dark:text-Dbackground px-4 py-2 rounded"
      >
        ← Back to Clubs
      </button>

      <div className="max-w-4xl mx-auto bg-white dark:bg-Dcard shadow-md rounded-xl overflow-hidden mb-12">
        <img
          src={club.image}
          alt={club.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-primary dark:text-Dprimary mb-4">
            {club.name}
          </h1>
          <p className="text-text dark:text-Dtext text-lg">
            {club.description}
          </p>
        </div>
      </div>

      {events.length > 0 && (
        <>
          <h2 className="text-3xl font-semibold text-primary dark:text-Dprimary mb-6">
            Events by {club.name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event._id}
                className="border border-primary dark:border-Dprimary rounded-xl overflow-hidden shadow-md bg-white dark:bg-Dcard"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary dark:text-Dprimary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-text dark:text-Dtext mb-2">
                    {event.description}
                  </p>
                  <p className="text-sm text-accent mb-1">Type: {event.type}</p>
                  <p className="text-sm text-text dark:text-Dtext mb-1">
                    Speaker: {event.speaker}
                  </p>
                  <p className="text-sm text-text dark:text-Dtext mb-1">
                    Date: {new Date(event.date).toDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ClubDetails;
