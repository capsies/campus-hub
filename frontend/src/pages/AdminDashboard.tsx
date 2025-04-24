import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(
    null
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="bg-background dark:bg-Dbackground min-h-screen py-16 px-10">
      <h1 className="text-5xl font-bold text-primary dark:text-Dprimary mb-10">
        Welcome, {user?.name || "Admin"} 🛠️
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Manage Clubs */}
        <div className="p-6 border-2 border-primary dark:border-Dprimary rounded-xl bg-white dark:bg-Dcard shadow">
          <h2 className="text-xl font-semibold text-primary dark:text-Dprimary mb-2">
            Manage Clubs
          </h2>
          <p className="text-text dark:text-Dtext">
            Add, edit, or remove student clubs and manage their visibility.
          </p>
        </div>

        {/* Manage Events */}
        <div className="p-6 border-2 border-primary dark:border-Dprimary rounded-xl bg-white dark:bg-Dcard shadow">
          <h2 className="text-xl font-semibold text-primary dark:text-Dprimary mb-2">
            Manage Events
          </h2>
          <p className="text-text dark:text-Dtext">
            Create and update events, assign them to clubs, and track status.
          </p>
        </div>

        {/* View Reports */}
        <div className="p-6 border-2 border-primary dark:border-Dprimary rounded-xl bg-white dark:bg-Dcard shadow">
          <h2 className="text-xl font-semibold text-primary dark:text-Dprimary mb-2">
            Reports & Insights
          </h2>
          <p className="text-text dark:text-Dtext">
            Review analytics and attendance across events and clubs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
