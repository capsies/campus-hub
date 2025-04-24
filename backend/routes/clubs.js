const express = require("express");
const router = express.Router();
const Club = require("../models/Club");

// GET all clubs
router.get("/", async (req, res) => {
    try {
        const clubs = await Club.find();
        res.status(200).json(clubs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching clubs", error });
    }
});

// Optional: GET one club by ID
router.get("/:id", async (req, res) => {
    try {
        const club = await Club.findById(req.params.id);
        if (!club) return res.status(404).json({ message: "Club not found" });
        res.status(200).json(club);
    } catch (error) {
        res.status(500).json({ message: "Error fetching club", error });
    }
});

module.exports = router;
