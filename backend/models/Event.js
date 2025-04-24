const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        enum: ["Workshop", "Seminar", "Hackathon", "Competition", "Other"],
        default: "Other",
    },
    speaker: {
        type: String,
        default: "TBA",
    },
    club: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    reportFile: {
        type: String, // e.g., "/reports/forensic-session.docx"
        default: ""
    },
    pictures: [String],  // store paths like "/uploads/image1.jpg"
    bills: [String],     // same for bill images      
    attendance: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Event", EventSchema);
