// server/server.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the database connection function

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all routes (important for React frontend)
app.use(express.json()); // Allows the server to accept JSON data in request bodies

// Basic route for testing the API
app.get('/', (req, res) => {
    res.send('RAI_LAB API is running...');
});

// We will define specific API routes (e.g., for projects, publications) here later
// Example: app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 5000; // Use port from .env, or 5000 as default

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));