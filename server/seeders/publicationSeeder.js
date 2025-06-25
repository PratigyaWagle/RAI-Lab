// server/seeders/publicationSeeder.js

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // Adjust path for .env
const mongoose = require('mongoose');
const Publication = require('../models/Publication'); // Import the Publication model

console.log("Publication Seeder script started."); // Diagnostic log

const publicationsData = [
    // Existing Publications (Keep these as they are)
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
        link: "https://example.com/pub1",
        type: "Conference Paper",
    },
    {
        title: "Interactive Visualization of AI Decision-Making Processes",
        authors: ["Jessica Saddington", "Jay Jang"],
        journalConference: "IEEE Vis Conference (Poster)",
        publicationDate: new Date('2023-10-05'),
        abstract: "We present an interactive poster demonstrating a tool for visualizing and understanding complex AI model decision paths.",
        link: "https://example.com/pub1",
        type: "Poster", // Explicitly set as 'Poster'
    },

    // --- NEW PUBLICATIONS ADDED BELOW ---

    // Poster Presentations
    {
        title: "Development of Conversational AI for Mental Health Support",
        authors: ["Anandi Dutta", "Shivani Mruthyunjaya"],
        journalConference: "Health Scholar Showcase, Translational Health Research Center, Texas State University",
        publicationDate: new Date('2025-04-04'),
        abstract: "// Add abstract here", // FILL THIS IN
        link: "https://example.com/pub1", // FILL THIS IN IF AVAILABLE
        type: "Poster",
    },
    {
        title: "Task-specific Evaluation for Biomedical Large Language Models (LLMs) for the HealthCare Industry",
        authors: ["Anandi Dutta"],
        journalConference: "TechConnect World Innovation Conference and Expo",
        publicationDate: new Date('2025-06-09'), // June 9-11, 2025
        abstract: "// Add abstract here", // FILL THIS IN
        link: "https://example.com/pub1", // FILL THIS IN IF AVAILABLE
        type: "Poster",
    },
    {
        title: "From Prediction to Action: A Hybrid ML-RL Model for Smart Grid Stability Control",
        authors: ["Kazi Sifatul Islam", "Anandi Dutta"],
        journalConference: "Graduate Student Research Conference (GSRC'2025), The Graduate College, Texas State University",
        publicationDate: new Date('2025-05-01'), // Estimating May 1st, 2025 for GSRC'2025
        abstract: "// Add abstract here", // FILL THIS IN
        link: "https://example.com/pub1", // FILL THIS IN IF AVAILABLE
        type: "Poster",
    },
    {
        title: "AI-Driven Predictions of In-Hospital Mortality After Orthopedic Surgery",
        authors: ["Li Chih-ying", "Anandi Dutta"],
        journalConference: "AIM-AHEAD Annual Meeting",
        publicationDate: new Date('2025-07-08'), // July 8-9, 2025
        abstract: "// Add abstract here", // FILL THIS IN
        link: "https://example.com/pub1", // FILL THIS IN IF AVAILABLE
        type: "Poster",
    },

    // Conference Publications
    {
        title: "Modeling Distracted Driving: Analyzing Driver Gaze, Vehicle Positioning, and Psychological Response for Enhanced Traffic Safety",
        authors: ["Barua, S.", "Dutta, Anandi"],
        journalConference: "2025 IEEE Conference on Artificial Intelligence (CAI)",
        publicationDate: new Date('2025-05-01'), // May, 2025
        abstract: "// Add abstract here", // FILL THIS IN
        link: "https://example.com/pub1", // FILL THIS IN IF AVAILABLE
        type: "Conference Paper",
    },
    {
        title: "Crash Severity Analysis of Child Bicyclists using Arm-Net and MambaNet",
        authors: ["Shriyank Somvanshi", "Rohit Chakraborty", "Anandi Dutta"],
        journalConference: "IEEE Conference on Artificial Intelligence (CAI)",
        publicationDate: new Date('2025-05-01'), // May, 2025
        abstract: "// Add abstract here", // FILL THIS IN
        link: "https://example.com/pub1", // FILL THIS IN IF AVAILABLE
        type: "Conference Paper",
    },
    {
        title: "Plantar Pressure Distribution During Stooping by Novice Roofers: Effects of Slope Angles Across Foot Zones and Machine Learning-Based Classification",
        authors: ["Rujan Kayastha", "Krishna Kisi", "Anandi Dutta"],
        journalConference: "CSCE Construction Specialty Conference / ASCE Construction Research Congress (CRC) 2025",
        publicationDate: new Date('2025-07-28'), // July 28-31
        abstract: "// Add abstract here", // FILL THIS IN
        link: "https://example.com/pub1", // FILL THIS IN IF AVAILABLE
        type: "Conference Paper",
    },
    {
        title: "Motor Fault Diagnosis Across Variable Power Using Deep Learning",
        authors: ["Enes Bugra Kaya", "Semih Aslan", "Damien Valles", "Anandi Dutta", "Sercan Iscan"],
        journalConference: "CITS 2025, The 2025 International Conference on Computer, Information and Telecommunication Systems",
        publicationDate: new Date('2025-07-16'), // July 16-18
        abstract: "// Add abstract here", // FILL THIS IN
        link: "https://example.com/pub1", // FILL THIS IN IF AVAILABLE
        type: "Conference Paper",
    },
    {
        title: "Adaptive Thermal Comfort Modeling Using Machine Learning: a Generalizable, Low-Sensor Approach for Diverse Climates and Buildings",
        authors: ["Md. Sakif Uddin Khan", "Anandi Dutta", "Rashedul Hasan"],
        journalConference: "IEEE Smart World Congress 2025",
        publicationDate: new Date('2025-08-18'), // August 18-23
        abstract: "// Add abstract here", // FILL THIS IN
        link: "https://example.com/pub1", // FILL THIS IN IF AVAILABLE
        type: "Conference Paper",
    },
    {
        title: "Hybrid ML-RL Approach for Smart Grid Stability Prediction and Optimized Control Strategy",
        authors: ["Kazi Sifatul Islam", "Anandi Dutta", "Shivani Mruthyunjaya"],
        journalConference: "IEEE Smart World Congress 2025",
        publicationDate: new Date('2025-08-18'), // August 18-23
        abstract: "// Add abstract here", // FILL THIS IN
        link: "https://example.com/pub1", // FILL THIS IN IF AVAILABLE
        type: "Conference Paper",
    },
    {
        title: "Introducing AI-Driven IoT Energy Management Framework",
        authors: ["Shivani Mruthyunjaya", "Anandi Dutta", "Kazi Sifatul Islam"],
        journalConference: "IEEE Smart World Congress 2025",
        publicationDate: new Date('2025-08-18'), // August 18-23
        abstract: "// Add abstract here", // FILL THIS IN
        link: "https://example.com/pub1", // FILL THIS IN IF AVAILABLE
        type: "Conference Paper",
    },

    // Journal Publications
    {
        title: "Applying Mamba Attention, TabPFN, and TabTransformers to Classify SAE Automation Levels in Crashes",
        authors: ["Shriyank Somvanshi", "Anannya Ghosh Tusti", "Mahmuda Sultana Mimi", "Md Monzurul Islam", "Sazzad Bin Bashar Polock", "Anandi Dutta", "Subasish Das"],
        journalConference: "arXiv:2506.04238, [cs.LG], Machine Learning",
        publicationDate: new Date('2025-05-01'), // May, 2025
        abstract: "// Add abstract here", // FILL THIS IN
        link: "https://example.com/pub1", // FILL THIS IN IF AVAILABLE
        type: "Journal Article",
    },
    {
        title: "Driving Education Advancements of Novice Drivers: A Systematic Literature Review",
        authors: ["Anannya Ghosh Tusti", "Anandi K Dutta", "Syed Aaqib Javed", "Subasish Das"],
        journalConference: "arXiv:2503.05762,[cs.CY], Computers and Society",
        publicationDate: new Date('2025-02-01'), // February, 2025
        abstract: "// Add abstract here", // FILL THIS IN
        link: "https://example.com/pub1", // FILL THIS IN IF AVAILABLE
        type: "Journal Article",
    },
    {
        title: "A Comprehensive Survey on Bio-Inspired Algorithms: Taxonomy, Applications, and Future Directions",
        authors: ["Shriyank Somvanshi", "Md Monzurul Islam", "Syed Aaqib Javed", "Gaurab Chhetri", "Kazi Sifatul Islam", "Tausif Islam Chowdhury", "Sazzad Bin Bashar Polock", "Anandi Dutta", "Subasish Das"],
        journalConference: "[cs.NE], Neural and Evolutionary Computing",
        publicationDate: new Date('2025-05-01'), // May, 2025
        abstract: "// Add abstract here", // FILL THIS IN
        link: "https://example.com/pub1", // FILL THIS IN IF AVAILABLE
        type: "Journal Article",
    },
    {
        title: "Quantum Computing in Transportation Engineering: A Survey",
        authors: ["Somvanshi, Shriyank", "Islam, Md Monzurul", "Polock, Sazzad Bin Bashar", "Chhetri, Gaurab", "Anderson, Darrell", "Dutta, Anandi", "Das, Subasish"],
        journalConference: "SSRN",
        publicationDate: new Date('2025-02-17'), // February 17, 2025
        abstract: "// Add abstract here", // FILL THIS IN
        link: "https://ssrn.com/abstract=5141686",
        doi: "10.2139/ssrn.5141686",
        type: "Journal Article",
    },
];

const seedPublications = async () => {
    console.log("Publication Seeder script started.");
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected for Seeding Publications!');

        console.log('Attempting to clear existing publication data...');
        // Optional: Clear existing publication data (good for re-running seeder)
        await Publication.deleteMany({});
        console.log('Existing publication data cleared.');

        console.log('Attempting to insert new publication data...');
        // Insert new data
        await Publication.insertMany(publicationsData);
        console.log('Publication data seeded successfully!');

    } catch (error) {
        console.error('Error seeding publication data:', error);
    } finally {
        console.log('Attempting to disconnect from MongoDB from Publication Seeder...');
        await mongoose.disconnect();
        console.log('MongoDB Disconnected from Publication Seeder.');
    }
};

seedPublications();
console.log("Publication Seeder script finished execution command.");