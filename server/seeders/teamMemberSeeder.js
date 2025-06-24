// server/seeders/teamMemberSeeder.js

const path = require('path');
// This line loads environment variables from the .env file located one directory up (in 'server' folder)
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const TeamMember = require('../models/TeamMember'); // Import the TeamMember model

// Your actual team member data, adapted to match your TeamMember schema in server/models/TeamMember.js
const teamMembersData = [
  {
    name: 'Dr.Anandi Dutta, Ph.D.',
    title: 'Director, RAI Lab', // Matches 'title' field in your schema
    image: 'DrDutta.png', // Matches 'image' field in your schema
    social: {
      email: 'myb43@txstate.edu',
      linkedin: '', // Replace '#' with actual LinkedIn URL
      twitter: '', // Replace '#' with actual Twitter URL
      googleScholar: '', // Placeholder, matches schema field
      researchgate: '', // Placeholder, matches schema field
      website: '', // Placeholder, matches schema field
      profile: '', // Placeholder, matches schema field
    },
    description: 'Brief biography of Dr. Anandi Dutta. You can expand this later.', // Matches 'description' field in your schema
  },
  {
    name: 'Dr.Mathew O. Aibinu',
    title: 'Postdoctoral Research Associate',
    image: 'Matthew.png',
    social: {
      email: '',
      linkedin: '',
      twitter: '',
      googleScholar: '',
      researchgate: '',
      website: '',
      profile: '',
    },
    description: 'Brief biography of Dr. Mathew O. Aibinu. You can expand this later.',
  },
  {
    name: 'Jessica Saddington',
    title: 'Undergraduate Research Assistant (UGRA)',
    image: 'JessicaSaddington.png',
    social: {
      email: '',
      linkedin: '',
      twitter: '',
      googleScholar: '',
      researchgate: '',
      website: '',
      profile: '',
    },
    description: 'Brief biography of Jessica Saddington. You can expand this later.',
  },
  {
    name: 'Kazi Sifatul Islam',
    title: 'Graduate Research Assistant (GRA)',
    image: 'SifatIslam.png',
    social: {
      email: '',
      linkedin: '',
      twitter: '',
      googleScholar: '',
      researchgate: '',
      website: '',
      profile: '',
    },
    description: 'Brief biography of Kazi Sifatul Islam. You can expand this later.',
  },
  {
    name: 'Jay Jang',
    title: 'Doctoral Research Assistant',
    image: 'JayJang.png',
    social: {
      email: '',
      linkedin: '',
      twitter: '',
      googleScholar: '',
      researchgate: '',
      website: '',
      profile: '',
    },
    description: 'Brief biography of Jay Jang. You can expand this later.',
  },
  {
    name: 'Shivani Mruthyunjaya',
    title: 'Undergraduate Research Assistant (UGRA)',
    image: 'Shivani.png',
    social: {
      email: '',
      linkedin: '',
      twitter: '',
      googleScholar: '',
      researchgate: '',
      website: '',
      profile: '',
    },
    description: 'Brief biography of Shivani Mruthyunjaya. You can expand this later.',
  },
  {
    name: 'Grish Gautam',
    title: 'Research Team Member',
    image: 'GrishGautam.png',
    social: {
      email: '',
      linkedin: '',
      twitter: '',
      googleScholar: '',
      researchgate: '',
      website: '',
      profile: '',
    },
    description: 'Brief biography of Grish Gautam. You can expand this later.',
  },
];

const seedTeamMembers = async () => {
  console.log("Seeder script started."); // Diagnostic log
  console.log("Attempting to connect to MongoDB..."); // Diagnostic log
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for Seeding Team Members!');

    console.log('Attempting to clear existing team member data...'); // Diagnostic log
    // Optional: Clear existing team member data (good for re-running seeder)
    await TeamMember.deleteMany({});
    console.log('Existing team member data cleared.');

    console.log('Attempting to insert new data...'); // Diagnostic log
    // Insert new data
    await TeamMember.insertMany(teamMembersData);
    console.log('Team member data seeded successfully!');

  } catch (error) {
    console.error('Error seeding team member data:', error);
    // Do not process.exit(1) here so the 'finally' block can run
  } finally {
    console.log('Attempting to disconnect from MongoDB...'); // Diagnostic log
    await mongoose.disconnect();
    console.log('MongoDB Disconnected from Team Member Seeder.');
  }
};

seedTeamMembers();
console.log("Seeder script finished."); // Diagnostic log