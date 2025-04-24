import EventCard from "./EventCard";

const Events = () => {
  return (
    <div className="bg-background py-10 text-center">
      <h2 className="text-primary text-6xl font-medium mb-6">Events</h2>

      {/* Cards Container */}
      <div className="flex justify-center gap-2">
        <EventCard
          year="2025"
          workshops="5"
          events="35"
          hackathons="3"
          clubs="8"
          isActive={true}
        />
        <EventCard
          year="2024"
          workshops="4"
          events="28"
          hackathons="2"
          clubs="8"
          isActive={false}
        />
        <EventCard
          year="2023"
          workshops="4"
          events="30"
          hackathons="4"
          clubs="7"
          isActive={true}
        />
      </div>
    </div>
  );
};

export default Events;
