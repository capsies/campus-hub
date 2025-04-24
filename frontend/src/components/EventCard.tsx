import React from "react";
import { useNavigate } from "react-router-dom";

interface EventCardProps {
  year: string;
  workshops: string;
  events: string;
  hackathons: string;
  clubs: string;
  isActive?: boolean; // Optional, defaults to false
}

const EventCard: React.FC<EventCardProps> = ({
  year,
  workshops,
  events,
  hackathons,
  clubs,
  isActive = false,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-accent p-6 shadow-md flex flex-col justify-between ${
        !isActive ? "bg-primary text-background" : "bg-secondary text-primary"
      }`}
      onClick={() => navigate(`/events/${year}`)}
    >
      {/* Year & Arrow */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-5xl font-semibold">{year}</h3>
        <button className="ml-30 text-2xl font-bold border px-2 py-1 rounded-md">
          ➝
        </button>
      </div>

      {/* Event Details */}
      <div className="text-lg text-left">
        <p>{workshops} Workshops</p>
        <p>{events} Events</p>
        <p>{hackathons} Hackathons</p>
        <p>{clubs} Clubs</p>
      </div>
    </div>
  );
};

export default EventCard;
