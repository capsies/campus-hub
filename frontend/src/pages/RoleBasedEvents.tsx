import EventsByYear from "./EventsByYear";
import EventsPage from "./EventsPage";

const RoleBasedEvents = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (user?.role === "student") {
    return <EventsByYear />;
  }

  // default to admin view
  return <EventsPage />;
};

export default RoleBasedEvents;
