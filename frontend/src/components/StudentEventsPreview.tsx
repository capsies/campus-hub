import { useNavigate } from "react-router-dom";

const years = [2023, 2024, 2025];

const StudentEventsPreview = () => {
  const navigate = useNavigate();

  const handleNavigate = (year: number) => {
    navigate(`/events/${year}`);
  };

  return (
    <section
      id="events"
      className="bg-background dark:bg-Dbackground py-16 px-10"
    >
      <div className="text-center mb-10">
        <h2 className="text-6xl font-semibold text-primary dark:text-Dprimary">
          Events
        </h2>
        <p className="text-lg text-text dark:text-Dtext mt-2">
          Explore all the events held across different years.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {years.map((year) => (
          <div
            key={year}
            onClick={() => handleNavigate(year)}
            className="cursor-pointer border-2 border-primary dark:border-Dprimary rounded-xl p-10 flex flex-col justify-center items-center hover:bg-primary hover:text-background dark:hover:bg-Dprimary dark:hover:text-Dbackground transition-colors"
          >
            <h3 className="text-5xl font-bold">{year}</h3>
            <p className="mt-2 text-xl">Events for the Year</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentEventsPreview;
