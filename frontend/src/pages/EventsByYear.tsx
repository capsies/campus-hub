import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type Event = {
  _id: string;
  title: string;
  description: string;
  date: string;
  type: string;
  speaker: string;
  image: string;
  attendance?: boolean;
  club?: {
    name: string;
  };
};

const EventsByYear = () => {
  const navigate = useNavigate();
  const { year } = useParams<{ year: string }>();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/events/${year}`);
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [year]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="bg-background dark:bg-Dbackground min-h-screen py-16 px-10">
      <button
        onClick={() => navigate("/student-home")}
        className="mb-6 bg-primary text-background dark:text-Dbackground px-4 py-2 rounded"
      >
        ← Back to Home
      </button>
      <h2 className="text-6xl font-semibold text-primary dark:text-Dprimary text-center mb-12">
        Events - {year}
      </h2>

      {events.length === 0 ? (
        <p className="text-center text-text dark:text-Dtext text-lg">
          No events found for {year}.
        </p>
      ) : (
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
                {event.club && (
                  <p className="text-sm text-text dark:text-Dtext">
                    Club: {event.club.name}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsByYear;
