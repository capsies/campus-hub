require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const cookieParser = require('cookie-parser');

const app = express(); //initialize instance of Express
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true })); // Adjust frontend port if needed
app.use(cookieParser());

// Import the authRoutes
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

// Simple test route
app.get('/', (req, res) => {
    res.send('Campus Hub API is running...this will be the home page');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error("❌ Mogodb connection Error:", err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running 🛫 on port: ${PORT}`)
});