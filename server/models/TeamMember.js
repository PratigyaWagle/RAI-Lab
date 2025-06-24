// server/models/TeamMember.js
const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  image: { // Path to the image file, e.g., 'DrDutta.png'
    type: String,
    trim: true,
  },
  description: { // Optional: Biography or more details
    type: String,
    trim: true,
  },
  social: {
    email: {
      type: String,
      trim: true,
      match: /^\S+@\S+\.\S+$/, // Basic email validation
    },
    linkedin: {
      type: String,
      trim: true,
    },
    twitter: {
      type: String,
      trim: true,
    },
    googleScholar: {
      type: String,
      trim: true,
    },
    researchgate: {
      type: String,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    profile: { // If there's an individual profile page
      type: String,
      trim: true,
    }
  },
}, {
  timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;