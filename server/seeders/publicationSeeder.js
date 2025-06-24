// server/seeders/publicationSeeder.js

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // Adjust path for .env
const mongoose = require('mongoose');
const Publication = require('../models/Publication'); // Import the Publication model

console.log("Publication Seeder script started."); // Diagnostic log

const publicationsData = [
  {
    title: "Ethical Considerations in AI for Public Health",
    authors: ["Dr. Anandi Dutta", "Dr. Mathew O. Aibinu", "Shivani Mruthyunjaya"],
    journalConference: "Journal of Medical AI Ethics",
    publicationDate: new Date('2024-03-10'),
    abstract: "This paper discusses the ethical implications of deploying AI solutions in public health systems, focusing on data privacy, algorithmic bias, and accountability.",
    link: "https://example.com/pub1",
    doi: "10.1007/s12345-024-0001-x",
    type: "Journal Article",
  },
  {
    title: "Deep Learning for Autonomous Drone Navigation in Urban Environments",
    authors: ["Jay Jang", "Kazi Sifatul Islam"],
    journalConference: "International Conference on Robotics and Automation (ICRA 2023)",
    publicationDate: new Date('2023-05-29'),
    abstract: "We present a novel deep learning framework for robust autonomous navigation of drones in complex urban settings, utilizing real-time sensor fusion.",
    link: "https://example.com/pub2",
    pdfLink: "/pdfs/drone_navigation.pdf", // Example PDF link
    type: "Conference Paper",
  },
  {
    title: "A Survey on Explainable AI Techniques for Financial Predictions",
    authors: ["Jessica Saddington", "Dr. Anandi Dutta"],
    journalConference: "Financial AI Summit 2024 (Poster Session)",
    publicationDate: new Date('2024-06-15'),
    abstract: "This poster summarizes various XAI techniques applied to financial forecasting models, evaluating their effectiveness and interpretability.",
    link: "https://example.com/pub3",
    type: "Poster", // Explicitly set as 'Poster'
  },
  {
    title: "Bias Detection and Mitigation in Healthcare AI Models",
    authors: ["Dr. Mathew O. Aibinu", "Dr. Anandi Dutta"],
    journalConference: "AI in Healthcare Journal, Vol. 5, No. 2",
    publicationDate: new Date('2023-11-20'),
    abstract: "Research on identifying and mitigating demographic biases in machine learning models used for medical diagnostics.",
    link: "https://example.com/pub4",
    doi: "10.1080/01234567.2023.987654",
    type: "Journal Article",
  },
  {
    title: "Leveraging Reinforcement Learning for Smart Grid Optimization",
    authors: ["Shivani Mruthyunjaya", "Kazi Sifatul Islam"],
    journalConference: "Smart Energy Systems Conference (SES 2022)",
    publicationDate: new Date('2022-09-01'),
    abstract: "An exploration of reinforcement learning agents for dynamic energy distribution and optimization within smart grid infrastructures.",
    link: "https://example.com/pub5",
    type: "Conference Paper",
  },
  {
    title: "Interactive Visualization of AI Decision-Making Processes",
    authors: ["Jessica Saddington", "Jay Jang"],
    journalConference: "IEEE Vis Conference (Poster)",
    publicationDate: new Date('2023-10-05'),
    abstract: "We present an interactive poster demonstrating a tool for visualizing and understanding complex AI model decision paths.",
    link: "https://example.com/pub6",
    type: "Poster", // Explicitly set as 'Poster'
  },
];

const seedPublications = async () => {
  console.log("Attempting to connect to MongoDB for Publication Seeding..."); // Diagnostic log
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for Seeding Publications!');

    console.log('Attempting to clear existing publication data...'); // Diagnostic log
    // Optional: Clear existing publication data (good for re-running seeder)
    await Publication.deleteMany({});
    console.log('Existing publication data cleared.');

    console.log('Attempting to insert new publication data...'); // Diagnostic log
    // Insert new data
    await Publication.insertMany(publicationsData);
    console.log('Publication data seeded successfully!');

  } catch (error) {
    console.error('Error seeding publication data:', error);
  } finally {
    console.log('Attempting to disconnect from MongoDB from Publication Seeder...'); // Diagnostic log
    await mongoose.disconnect();
    console.log('MongoDB Disconnected from Publication Seeder.');
  }
};

seedPublications();
console.log("Publication Seeder script finished execution command."); // Diagnostic log