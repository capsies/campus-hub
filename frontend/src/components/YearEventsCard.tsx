import React from "react";
import { useNavigate } from "react-router-dom";

interface YearEventsCardProps {
  year: string;
  eventId: string;
  title: string;
  date: string;
  type: string;
  image: string;
  onDelete: (eventId: string) => void;
}

const YearEventsCard: React.FC<YearEventsCardProps> = ({
  year,
  eventId,
  title,
  date,
  type,
  image,
  onDelete,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/events/${year}/${eventId}`);
  };

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      onClick={handleCardClick}
      className="bg-white dark:bg-Dcard border border-primary dark:border-Dprimary rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-[1.01]"
    >
      {/* Image */}
      <img
        src={`http://localhost:5000${image}`}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-2xl font-bold text-primary dark:text-Dprimary mb-1">
          {title}
        </h3>
        <p className="text-sm text-accent">{formattedDate}</p>
        <p className="text-sm text-text dark:text-Dtext mt-1">Type: {type}</p>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/event/edit/${eventId}`);
            }}
            className="bg-primary text-background dark:text-Dbackground px-3 py-1 rounded-md text-sm"
          >
            View
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(eventId);
            }}
            className="border border-primary dark:border-Dprimary text-primary px-3 py-1 rounded-md text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default YearEventsCard;
