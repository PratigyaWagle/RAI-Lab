// server/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            // Mongoose 6+ no longer needs useCreateIndex or useFindAndModify.
            // If you are using an older version of Mongoose (<6), you might need them.
            // Otherwise, it's good to omit them as they are deprecated.
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        // Exit process with failure (1 indicates an error)
        process.exit(1);
    }
};

module.exports = connectDB;