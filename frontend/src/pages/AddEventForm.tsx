import { useState } from "react";
import axios from "axios";

const clubs = [
  "Deco",
  "Dopy",
  "IoT Club",
  "AIML Club",
  "Coding Club",
  "Robotics Club",
  "Mathematics Club",
  "Others",
];

const AddEventForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    year: new Date().getFullYear(),
    type: "Workshop",
    speaker: "",
    club: "",
    image: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setForm((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("date", form.date);
      formData.append("year", String(form.year));
      formData.append("type", form.type);
      formData.append("speaker", form.speaker);
      formData.append("club", form.club);
      if (form.image) {
        formData.append("image", form.image);
      }

      await axios.post("http://localhost:5000/api/events", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Event added successfully!");
    } catch (err) {
      console.error("Failed to add event", err);
      alert("Failed to add event.");
    }
  };

  return (
    <div className="p-10 bg-background dark:bg-Dbackground text-primary dark:text-Dprimary max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Add New Event</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          name="speaker"
          placeholder="Speaker/Guest"
          value={form.speaker}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Workshop</option>
          <option>Seminar</option>
          <option>Hackathon</option>
          <option>Competition</option>
          <option>Other</option>
        </select>

        {/* Club Dropdown with fixed values */}
        <select
          name="club"
          value={form.club}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Club</option>
          {clubs.map((club) => (
            <option key={club} value={club}>
              {club}
            </option>
          ))}
        </select>

        {/* Image upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-primary text-background px-6 py-2 rounded font-semibold"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEventForm;
