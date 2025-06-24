// server/models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  shortDescription: {
    type: String,
    required: true,
    trim: true,
  },
  longDescription: { // More detailed description for a dedicated page
    type: String,
    trim: true,
  },
  imageUrl: { // Path to the project image/thumbnail
    type: String,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date, // Optional: for ongoing projects
  },
  // Assuming grants might be associated with projects, or projects can be grants
  isGrant: {
    type: Boolean,
    default: false,
  },
  fundingAgency: { // If it's a grant
    type: String,
    trim: true,
  },
  principalInvestigators: [ // Array of names or references to team members
    {
      type: String, // Can store names directly for simplicity
      trim: true,
    }
  ],
  // Optional: Add a status (e.g., 'active', 'completed', 'pending')
  status: {
    type: String,
    enum: ['active', 'completed', 'pending', 'archived'],
    default: 'active',
  },
  // Optional: A link to a dedicated project page if external
  projectLink: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;