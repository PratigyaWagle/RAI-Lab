// server/seeders/projectSeeder.js

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // Adjust path for .env
const mongoose = require('mongoose');
const Project = require('../models/Project'); // Import the Project model

console.log("Project Seeder script started."); // Diagnostic log

const projectsData = [
  {
    title: "AI for Environmental Monitoring",
    shortDescription: "Developing AI models to analyze satellite imagery for environmental changes.",
    longDescription: "This project aims to leverage deep learning techniques to process vast amounts of satellite data, identifying deforestation, water pollution, and urban sprawl patterns. Our goal is to provide actionable insights for environmental protection agencies.",
    imageUrl: "project-env-ai.jpg", // Example image name
    startDate: new Date('2023-01-15'),
    endDate: null, // Ongoing project
    isGrant: false,
    principalInvestigators: ["Dr. Anandi Dutta"],
    status: "active",
    projectLink: "https://example.com/environmental-ai" // Optional link
  },
  {
    title: "Ethical AI in Healthcare Grant",
    shortDescription: "A grant-funded research on ensuring fairness and transparency in AI diagnostics.",
    longDescription: "Funded by the National Science Foundation, this project investigates biases in AI algorithms used for medical diagnosis and develops methodologies to ensure equitable and transparent outcomes for diverse patient populations. Collaboration with local hospitals is underway.",
    imageUrl: "project-healthcare-ai.jpg",
    startDate: new Date('2024-03-01'),
    endDate: null, // Ongoing grant project
    isGrant: true,
    fundingAgency: "National Science Foundation",
    principalInvestigators: ["Dr. Mathew O. Aibinu", "Dr. Anandi Dutta"],
    status: "active",
    projectLink: "https://example.com/ethical-healthcare-ai"
  },
  {
    title: "Robotics for Disaster Response",
    shortDescription: "Designing autonomous robots to assist in search and rescue operations.",
    longDescription: "This completed project focused on developing robust robotic platforms equipped with AI-powered vision systems capable of navigating hazardous environments and identifying survivors in disaster zones. The prototypes demonstrated promising results in simulation and controlled environments.",
    imageUrl: "project-robotics.jpg",
    startDate: new Date('2020-06-01'),
    endDate: new Date('2022-12-31'),
    isGrant: false,
    principalInvestigators: ["Jay Jang"],
    status: "completed",
    projectLink: "https://example.com/robotics-disaster"
  },
  {
    title: "Smart City Infrastructure Grant",
    shortDescription: "Research on AI-driven solutions for optimizing urban traffic flow and energy consumption.",
    longDescription: "This grant explored the application of machine learning to real-time traffic data and smart grid management, aiming to reduce congestion and improve energy efficiency in urban settings. The findings were published in leading urban planning journals.",
    imageUrl: "project-smart-city.jpg",
    startDate: new Date('2021-09-01'),
    endDate: new Date('2023-08-30'),
    isGrant: true,
    fundingAgency: "Department of Energy",
    principalInvestigators: ["Kazi Sifatul Islam"],
    status: "completed",
    projectLink: "https://example.com/smart-city-grant"
  },
  {
    title: "Explainable AI Frameworks",
    shortDescription: "Developing new methods to make complex AI decisions understandable to humans.",
    longDescription: "This ongoing project focuses on creating frameworks and tools that allow users to understand why an AI system made a particular decision, fostering trust and enabling better human-AI collaboration. Initial prototypes are being tested with medical and financial applications.",
    imageUrl: "project-explainable-ai.jpg",
    startDate: new Date('2024-01-01'),
    endDate: null,
    isGrant: false,
    principalInvestigators: ["Shivani Mruthyunjaya", "Dr. Anandi Dutta"],
    status: "active",
    projectLink: "https://example.com/explainable-ai"
  },
];

const seedProjects = async () => {
  console.log("Attempting to connect to MongoDB for Project Seeding..."); // Diagnostic log
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for Seeding Projects!');

    console.log('Attempting to clear existing project data...'); // Diagnostic log
    // Optional: Clear existing project data (good for re-running seeder)
    await Project.deleteMany({});
    console.log('Existing project data cleared.');

    console.log('Attempting to insert new project data...'); // Diagnostic log
    // Insert new data
    await Project.insertMany(projectsData);
    console.log('Project data seeded successfully!');

  } catch (error) {
    console.error('Error seeding project data:', error);
  } finally {
    console.log('Attempting to disconnect from MongoDB from Project Seeder...'); // Diagnostic log
    await mongoose.disconnect();
    console.log('MongoDB Disconnected from Project Seeder.');
  }
};

seedProjects();
console.log("Project Seeder script finished execution command."); // Diagnostic log