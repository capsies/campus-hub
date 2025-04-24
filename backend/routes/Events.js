const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const upload = require("../middleware/upload");

// 🔁 Multer config for multiple file fields
const uploadFields = upload.fields([
    { name: "image", maxCount: 1 },
    { name: "reportFile", maxCount: 1 },
    { name: "pictures", maxCount: 10 },
    { name: "bills", maxCount: 10 },
]);

// 🟢 GET all events for a specific year (students/admins)
router.get("/:year", async (req, res) => {
    try {
        const year = parseInt(req.params.year);
        const events = await Event.find({ year });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: "Error fetching events", error });
    }
});

// 🟢 GET events for a specific club (students)
router.get("/club/:clubId", async (req, res) => {
    try {
        const { clubId } = req.params;
        const events = await Event.find({ club: clubId }).sort({ date: -1 });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: "Error fetching club events", error });
    }
});

// 🟢 GET single event by ID (admin/student)
router.get("/id/:id", async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: "Error fetching event", error });
    }
});

// 🔴 DELETE event by ID (admin only)
router.delete("/:id", async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting event", error });
    }
});

// 🟢 POST: Add a new event with all file uploads
router.post("/", uploadFields, async (req, res) => {
    try {
        const { title, description, date, year, type, speaker, club } = req.body;

        const newEvent = new Event({
            title,
            description,
            date,
            year,
            type,
            speaker,
            club,
            image: req.files?.image?.[0]?.path?.replace("public", "") || "",
            reportFile: req.files?.reportFile?.[0]?.path?.replace("public", "") || "",
            pictures: req.files?.pictures?.map((f) => f.path.replace("public", "")) || [],
            bills: req.files?.bills?.map((f) => f.path.replace("public", "")) || [],
        });

        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (err) {
        console.error("Event creation failed", err);
        res.status(500).json({ message: "Error creating event", error: err });
    }
});

// 🟢 PUT update event by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: "Error updating event", error });
    }
});

module.exports = router;
