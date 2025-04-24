import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
//import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import Event from "./pages/Event";
import FeaturesPage from "./pages/FeaturesPage";
import About from "./pages/AboutPage";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import StudentHome from "./pages/StudentHome";
import ClubDetails from "./pages/ClubDetails";
import AllClubs from "./pages/AllClubs";
import RoleBasedEvents from "./pages/RoleBasedEvents";
import AddEventForm from "./pages/AddEventForm";
//import EventsByYear from "./pages/EventsByYear";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route
          path="/event/edit/:eventId"
          element={<EventDetailsPage />}
        />{" "}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/events" element={<Event />} />
        <Route path="/events/:year" element={<RoleBasedEvents />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/clubs" element={<AllClubs />} />
        <Route path="/clubs/:id" element={<ClubDetails />} />
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/events/new" element={<AddEventForm />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
          <Route path="/student-home" element={<StudentHome />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
