const mongoose = require("mongoose");
const Club = require("./models/Club");

const mongoURI = "mongodb://127.0.0.1:27017/campushub";

const clubs = [
    {
        name: "Deco",
        description: "A creative club focused on decoration, art, and visual themes for events.",
        image: "/clubs/deco.jpg",
    },
    {
        name: "Dopy",
        description: "Explore quirky, offbeat ideas and fun activities with the Dopy club!",
        image: "/clubs/dopy.jpg",
    },
    {
        name: "Coding Club",
        description: "Join us to code, compete, and collaborate on real-world tech challenges.",
        image: "/clubs/coding.jpg",
    },
    {
        name: "NEN",
        description: "Empowering entrepreneurship and innovation through mentorship and events.",
        image: "/clubs/nen.jpg",
    },
    {
        name: "Cyber Security Club",
        description: "Delve into ethical hacking, security practices, and capture-the-flag challenges.",
        image: "/clubs/cyber.jpg",
    },
    {
        name: "Mathematics Club",
        description: "Explore numbers, puzzles, and problem-solving with fellow math enthusiasts.",
        image: "/clubs/math.jpg",
    },
    {
        name: "Artificial Intelligence Club",
        description: "Dive into AI, machine learning, and research-based projects.",
        image: "/clubs/ai.jpg",
    },
    {
        name: "Robotics Club",
        description: "Build bots, automate tasks, and compete in robotics competitions.",
        image: "/clubs/robotics.jpg",
    },
];

const run = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("✅ MongoDB connected");

        await Club.deleteMany();
        await Club.insertMany(clubs);

        console.log("🌱 Dummy clubs added!");
        mongoose.connection.close();
    } catch (err) {
        console.error("❌ Error seeding clubs:", err);
    }
};

run();
