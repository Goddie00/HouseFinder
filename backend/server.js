// Import required modules
import express from 'express'; // Web framework for Node.js
import dotenv from 'dotenv'; // For loading environment variables from a .env file
import cors from 'cors'; // Middleware for enabling Cross-Origin Resource Sharing
import connectDB from './config/db.js'; // Custom module to connect to MongoDB
import houseRoutes from './routes/houseRoutes.js'; // Route handlers for house-related endpoints
import userRoutes from './routes/userRoutes.js'; // Route handlers for user-related endpoints

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express application
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse incoming JSON requests

// Define API routes
app.use('/api/houses', houseRoutes); // Route for handling house-related requests
app.use('/api/users', userRoutes); // Route for handling user-related requests

// Set up server to listen on a specified port
const PORT = process.env.PORT || 5000; // Use port from environment variable or default to 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log message to indicate the server is running
});
