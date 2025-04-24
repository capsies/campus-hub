const mongoose = require("mongoose");
const Club = require("./models/Club");
const Event = require("./models/Event");

mongoose.connect("mongodb://127.0.0.1:27017/campushub");

const seedEvents = async () => {
    try {
        const clubs = await Club.find();

        const getClubId = (name) =>
            clubs.find((c) => c.name.toLowerCase() === name.toLowerCase())?._id;

        const events = [
            // 🚀 Existing samples
            {
                title: "CodeSprint 2023",
                description: "Annual competitive programming event with prizes.",
                year: 2023,
                date: new Date("2023-04-10"),
                type: "Hackathon",
                speaker: "Mr. Pranav Goel",
                club: getClubId("Coding Club"),
                image: "/events/codesprint.jpg",
                attendance: true,
            },
            {
                title: "AI Conclave",
                description: "Talks and demos on Artificial Intelligence trends.",
                year: 2024,
                date: new Date("2024-08-15"),
                type: "Seminar",
                speaker: "Dr. Neha Singh",
                club: getClubId("Artificial Intelligence Club"),
                image: "/events/aiconclave.jpg",
            },
            {
                title: "Maths Puzzle Day",
                description: "Math games and logic puzzles for fun and learning.",
                year: 2025,
                date: new Date("2025-01-11"),
                type: "Workshop",
                speaker: "Prof. Ravi Kumar",
                club: getClubId("Mathematics Club"),
                image: "/events/mathpuzzle.jpg",
            },

            // 🎨 Deco Club
            {
                title: "Vibes",
                description: "A colorful decor and art festival to set the tone for college events.",
                year: 2023,
                date: new Date("2023-01-18"),
                type: "Competition",
                speaker: "Ms. Riya Mehta",
                club: getClubId("Deco"),
                image: "/events/vibes.jpg",
            },
            {
                title: "Vibgyor",
                description: "A rainbow-themed celebration of design, color, and expression.",
                year: 2024,
                date: new Date("2024-03-10"),
                type: "Workshop",
                speaker: "Mr. Ankit Rawal",
                club: getClubId("Deco"),
                image: "/events/vibgyor.jpg",
            },

            // 🎭 Dopy Club
            {
                title: "Baswara",
                description: "Cultural event with music, dance, and vibrant performances.",
                year: 2023,
                date: new Date("2023-10-05"),
                type: "Seminar",
                speaker: "Ms. Sneha Desai",
                club: getClubId("Dopy"),
                image: "/events/baswara.jpg",
            },
            {
                title: "Traditional Day",
                description: "A celebration of Indian ethnic attire and traditional spirit.",
                year: 2024,
                date: new Date("2024-11-22"),
                type: "Competition",
                speaker: "College Committee",
                club: getClubId("Dopy"),
                image: "/events/traditional.jpg",
            },
        ];

        await Event.deleteMany();
        await Event.insertMany(events);

        console.log("🌱 Dummy events (including Deco & Dopy) added!");
        mongoose.connection.close();
    } catch (err) {
        console.error("❌ Error seeding events:", err);
    }
};

seedEvents();
