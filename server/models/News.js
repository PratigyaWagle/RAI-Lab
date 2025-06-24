// server/models/News.js
const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  link: { // Optional: Link to the full story, event details, or publication
    type: String,
    trim: true,
    default: '#', // Default to '#' if no link is provided
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps automatically
});

const News = mongoose.model('News', newsSchema);

module.exports = News;