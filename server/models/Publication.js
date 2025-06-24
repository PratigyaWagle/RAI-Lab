// server/models/Publication.js
const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  authors: {
    type: [String], // Array of author names
    required: true,
  },
  journalConference: { // Where it was published (e.g., "IEEE Transactions on AI", "NeurIPS 2024")
    type: String,
    trim: true,
  },
  publicationDate: {
    type: Date,
    required: true,
  },
  abstract: { // A brief summary of the publication
    type: String,
    trim: true,
  },
  // Optional: Link to the full paper, arXiv, DOI, or publisher page
  link: {
    type: String,
    trim: true,
  },
  // Optional: DOI (Digital Object Identifier)
  doi: {
    type: String,
    trim: true,
  },
  // Optional: PDF download link (if hosted on your site)
  pdfLink: {
    type: String,
    trim: true,
  },
  // Optional: Category or type of publication (e.g., "Journal Article", "Conference Paper", "Book Chapter")
  type: {
    type: String,
    enum: ['Journal Article', 'Conference Paper', 'Book Chapter', 'Preprint', 'Thesis', 'Report', 'Poster', 'Other'], // 'Poster' added here
    default: 'Journal Article',
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;