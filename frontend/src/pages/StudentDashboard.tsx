import { useEffect, useState } from "react";

const StudentDashboard = () => {
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
        Welcome, {user?.name || "Student"} 🎓
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* My Events */}
        <div className="p-6 border-2 border-primary dark:border-Dprimary rounded-xl bg-white dark:bg-Dcard shadow">
          <h2 className="text-xl font-semibold text-primary dark:text-Dprimary mb-2">
            My Events
          </h2>
          <p className="text-text dark:text-Dtext">
            View the events you’ve registered or participated in.
          </p>
        </div>

        {/* Clubs Joined */}
        <div className="p-6 border-2 border-primary dark:border-Dprimary rounded-xl bg-white dark:bg-Dcard shadow">
          <h2 className="text-xl font-semibold text-primary dark:text-Dprimary mb-2">
            My Clubs
          </h2>
          <p className="text-text dark:text-Dtext">
            Explore clubs you're part of or discover new ones.
          </p>
        </div>

        {/* Profile / Edit Info */}
        <div className="p-6 border-2 border-primary dark:border-Dprimary rounded-xl bg-white dark:bg-Dcard shadow">
          <h2 className="text-xl font-semibold text-primary dark:text-Dprimary mb-2">
            My Profile
          </h2>
          <p className="text-text dark:text-Dtext">
            View and update your profile information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
