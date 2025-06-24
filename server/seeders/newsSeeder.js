// server/seeders/newsSeeder.js

const path = require('path'); // Add this line
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // This line modified

// ADD THESE console.log LINES FOR DEBUGGING:
console.log('Environment Variables loaded:');
console.log('  MONGO_URI is:', process.env.MONGO_URI ? 'SET' : 'UNDEFINED');
console.log('  PORT is:', process.env.PORT);
console.log('  Full process.env (masked MONGO_URI):', Object.keys(process.env).filter(key => key !== 'MONGO_URI').reduce((obj, key) => { obj[key] = process.env[key]; return obj; }, {}));


const mongoose = require('mongoose');
const News = require('../models/News'); // Import the News model

// Dummy data from your AllNewsPage.jsx
const newsData = [
  {
    title: "Lab Awarded New Grant for AI Ethics",
    date: new Date("2025-06-15T10:00:00Z"), // Using ISO format date
    description: "Our lab has successfully secured funding for a groundbreaking project on ethical AI governance.",
    link: "#"
  },
  {
    title: "Professor Smith to Keynote at AI Summit",
    date: new Date("2025-05-28T10:00:00Z"),
    description: "Professor Jane Smith will deliver a keynote speech on explainable AI at the upcoming global summit.",
    link: "#"
  },
  {
    title: "New Publication: \"AI and Society\"",
    date: new Date("2025-04-10T10:00:00Z"),
    description: "Our latest research on the societal impact of AI has been published in a leading journal.",
    link: "#"
  },
  // Add more news items as needed from your AllNewsPage.jsx or other sources
];

const seedNews = async () => {
  try {
    // This line will use process.env.MONGO_URI, which we are debugging
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for Seeding!');

    // Clear existing news data (optional, but good for re-running seeder)
    await News.deleteMany({});
    console.log('Existing news data cleared.');

    // Insert new data
    await News.insertMany(newsData);
    console.log('News data seeded successfully!');

  } catch (error) {
    console.error('Error seeding news data:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB Disconnected from Seeder.');
  }
};

seedNews();