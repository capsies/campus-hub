import dashIcon from "../assets/dashboard.svg";

const StudentFeatures = () => {
  return (
    <div className="bg-background py-10 px-36 text-center">
      <h2 className="text-primary text-6xl font-medium">Features</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        {/* Feature 1: Check Participation */}
        <div className="py-8 p-4 border-2 border-primary rounded-lg flex items-center gap-4">
          <img src={dashIcon} alt="Participation Icon" className="w-12 h-12" />
          <div>
            <div className="text-2xl font-medium text-accent text-left">
              Check
            </div>
            <div className="text-2xl font-regular text-primary text-left">
              Participation
            </div>
          </div>
        </div>

        {/* Feature 2: View Clubs */}
        <div className="p-4 border-2 border-primary rounded-lg flex items-center gap-4">
          <img src={dashIcon} alt="Clubs Icon" className="w-12 h-12" />
          <div>
            <div className="text-2xl font-medium text-accent text-left">
              Explore
            </div>
            <div className="text-2xl font-regular text-primary text-left">
              Clubs
            </div>
          </div>
        </div>

        {/* Feature 3: View Past/Ongoing Events */}
        <div className="p-4 border-2 border-primary rounded-lg flex items-center gap-4">
          <img src={dashIcon} alt="Past Events Icon" className="w-12 h-12" />
          <div>
            <div className="text-2xl font-medium text-accent text-left">
              View
            </div>
            <div className="text-2xl font-regular text-primary text-left">
              Events
            </div>
          </div>
        </div>

        {/* Feature 4: Register for Future Events */}
        <div className="p-4 border-2 border-primary rounded-lg flex items-center gap-4">
          <img
            src={dashIcon}
            alt="Upcoming Events Icon"
            className="w-12 h-12"
          />
          <div>
            <div className="text-2xl font-medium text-accent text-left">
              Register
            </div>
            <div className="text-2xl font-regular text-primary text-left">
              for Events
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeatures;
