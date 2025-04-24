import dash from "../assets/dashboard.svg";
import events from "../assets/dashboard.svg"; // Add the correct paths for these icons
import search from "../assets/dashboard.svg";
import reports from "../assets/dashboard.svg";

const Features = () => {
  return (
    <div className="bg-background py-10 px-36 text-center">
      <h2 className="text-primary text-6xl font-medium">Features</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        {/* Feature 1 */}
        <div className="py-8 px-4 border-2 border-primary rounded-lg flex items-center gap-4">
          <img src={dash} alt="Dashboard Icon" className="w-12 h-12" />
          <div>
            <div className="text-2xl font-medium text-accent text-left">
              Personal
            </div>
            <div className="text-2xl font-regular text-primary text-left">
              Dashboards
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="p-4 border-2 border-primary rounded-lg flex items-center gap-4">
          <img src={events} alt="Events Icon" className="w-12 h-12" />
          <div>
            <div className="text-2xl font-medium text-accent text-left">
              Digitalize
            </div>
            <div className="text-2xl font-regular text-primary text-left">
              Events
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="p-4 border-2 border-primary rounded-lg flex items-center gap-4">
          <img src={search} alt="Search Icon" className="w-12 h-12" />
          <div>
            <div className="text-2xl font-medium text-accent text-left">
              Search
            </div>
            <div className="text-2xl font-regular text-primary text-left">
              Queries
            </div>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="p-4 border-2 border-primary rounded-lg flex items-center gap-4">
          <img src={reports} alt="Reports Icon" className="w-12 h-12" />
          <div>
            <div className="text-2xl font-medium text-accent text-left">
              Visual
            </div>
            <div className="text-2xl font-regular text-primary text-left">
              Reports
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
