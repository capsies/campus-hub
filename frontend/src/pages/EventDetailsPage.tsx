import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type Event = {
  title: string;
  type: string;
  speaker: string;
  date: string;
  endDate?: string;
  description: string;
  image: string;
  pictures: string[];
  bills: string[];
  reportFile?: string;
};

const EventDetailsPage = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/events/id/${eventId}`
      );
      setEvent(res.data);
    };
    fetchEvent();
  }, [eventId]);

  if (!event) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="p-10 bg-background min-h-screen text-primary">
      <h1 className="text-4xl font-bold mb-6">{event.type}s</h1>

      {/* Event Header */}
      <div className="bg-secondary p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <p className="text-lg mb-1">
              <strong>Workshop:</strong> {event.title}
            </p>
            <p className="text-lg mb-1">
              <strong>Speaker:</strong> {event.speaker}
            </p>
            <p className="text-lg mb-1">
              <strong>Start Date:</strong> {new Date(event.date).toDateString()}
            </p>
            {event.endDate && (
              <p className="text-lg mb-1">
                <strong>End Date:</strong>{" "}
                {new Date(event.endDate).toDateString()}
              </p>
            )}
          </div>
          <img
            src={`http://localhost:5000${event.image}`}
            alt={event.title}
            className="w-full md:w-64 h-48 object-cover rounded"
          />
        </div>
      </div>

      {/* Summary Report */}
      <div className="bg-secondary p-6 rounded-lg mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold">Summary Report</h2>
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-accent underline"
          >
            {showFullDescription ? "Show Less" : "Click to Read More"}
          </button>
        </div>
        <p className="text-text">
          {showFullDescription
            ? event.description
            : `${event.description.slice(0, 250)}...`}
        </p>
      </div>

      {/* Event Pictures */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pictures of Event</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {event.pictures.map((pic, index) => (
            <img
              key={index}
              src={`http://localhost:5000${pic}`}
              alt={`event-${index}`}
              className="h-48 w-full object-cover rounded shadow"
            />
          ))}
        </div>
      </div>

      {/* Bills */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Bills for the Events</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {event.bills.map((bill, index) => (
            <img
              key={index}
              src={`http://localhost:5000${bill}`}
              alt={`bill-${index}`}
              className="h-64 w-full object-contain bg-white rounded shadow"
            />
          ))}
        </div>
      </div>

      {/* Full Report */}
      {event.reportFile && (
        <div className="flex gap-4">
          <a
            href={`http://localhost:5000${event.reportFile}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-background px-4 py-2 rounded"
          >
            View Full Report
          </a>
        </div>
      )}
    </div>
  );
};

export default EventDetailsPage;
