const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true, // store image URLs or paths
    },
});

module.exports = mongoose.model("Club", ClubSchema);
