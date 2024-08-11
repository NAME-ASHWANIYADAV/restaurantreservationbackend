import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); // Ensure environment variables are loaded

export const dbConnection = () => {
  const dbURI = process.env.MONGO_URI; // Use the correct environment variable name

  if (!dbURI) {
    console.error("Database URI is not defined in environment variables.");
    process.exit(1);
  }

  mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout if necessary
  })
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.error("Some error occurred while connecting to database:", err));
};

