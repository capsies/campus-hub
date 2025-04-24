import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import YearEventsCard from "../components/YearEventsCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

type EventType = {
  _id: string;
  title: string;
  date: string;
  type: string;
  image: string;
};

const EventsPage = () => {
  const { year } = useParams<{ year: string }>();
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventType[]>([]);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/events/${year}`);
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events", err);
      }
    };

    if (year) fetchEvents();
  }, [year]);

  const handleDelete = async (eventId: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${eventId}`);
      setEvents((prev) => prev.filter((e) => e._id !== eventId));
    } catch (err) {
      console.error("Error deleting event", err);
    }
  };

  return (
    <>
      <NavBar />
      <div className="p-25 bg-background min-h-screen">
        <div className="flex justify-between items-center mb-14">
          <h1 className="text-5xl font-bold text-primary">{year} Events</h1>

          {user?.role === "admin" && (
            <button
              onClick={() => navigate("/events/new")}
              className="bg-accent text-primary font-semibold px-6 py-2 rounded hover:bg-accent-dark transition-colors"
            >
              + Add Event
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.length > 0 ? (
            events.map((event) => (
              <YearEventsCard
                key={event._id}
                year={year || ""}
                eventId={event._id}
                title={event.title}
                date={event.date}
                type={event.type}
                image={event.image}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p className="text-xl text-gray-500">No events found for {year}.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
