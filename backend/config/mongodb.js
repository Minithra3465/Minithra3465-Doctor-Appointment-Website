import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();  // ✅ Ensure .env is loaded

console.log("Checking MongoDB URI in mongodb.js:", process.env.MONGODB_URI);  // Debugging

const connectDB = async () => {
  mongoose.connection.on('connected', () => console.log('Database Connected'))
  await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
}

export default connectDB