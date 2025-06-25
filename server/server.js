// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') }); // Load .env from current directory

const app = express();
const PORT = process.env.PORT || 5000;

// Import Mongoose Models
const News = require('./models/News');
const Project = require('./models/Project');
const Publication = require('./models/Publication'); // Import the Publication model

// Middleware
app.use(cors()); // Use CORS middleware
app.use(express.json()); // Body parser for JSON data

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch(err => console.error('MongoDB connection error:', err.message));

// API Routes

// News Routes
app.get('/api/news', async (req, res) => {
  try {
    const news = await News.find({}).sort({ date: -1 }); // Sort by date descending
    res.json(news);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).json({ message: 'Error fetching news', error: err.message });
  }
});

app.get('/api/news/:id', async (req, res) => {
  try {
    const newsItem = await News.findById(req.params.id);
    if (!newsItem) {
      return res.status(404).json({ message: 'News item not found' });
    }
    res.json(newsItem);
  } catch (err) {
    console.error('Error fetching single news item:', err);
    res.status(500).json({ message: 'Error fetching news item', error: err.message });
  }
});



// Projects & Grants Routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ message: 'Error fetching projects', error: err.message });
  }
});

app.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    console.error('Error fetching single project:', err);
    res.status(500).json({ message: 'Error fetching project', error: err.message });
  }
});

// Publications Routes (MODIFIED FOR FILTERING)
app.get('/api/publications', async (req, res) => {
  try {
    const { type } = req.query; // Get the 'type' query parameter

    let filter = {};
    if (type) {
      // Create a case-insensitive regex for type matching
      filter.type = new RegExp(type, 'i');
    }

    const publications = await Publication.find(filter).sort({ publicationDate: -1 }); // Sort by date descending
    res.json(publications);
  } catch (err) {
    console.error('Error fetching publications:', err);
    res.status(500).json({ message: 'Error fetching publications', error: err.message });
  }
});

app.get('/api/publications/:id', async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    if (!publication) {
      return res.status(404).json({ message: 'Publication not found' });
    }
    res.json(publication);
  } catch (err) {
    console.error('Error fetching single publication:', err);
    res.status(500).json({ message: 'Error fetching publication', error: err.message });
  }
  });


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
