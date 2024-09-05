// Import necessary modules and functions
import express from 'express'; // Import Express for routing
import { registerUser, loginUser } from '../controllers/userController.js'; // Import controller functions

// Create a new router instance
const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);
// Route to log in an existing user
router.post('/login', loginUser);

// Add more routes as needed for additional user-related functionalities (e.g., update, delete)

// Export the router to be used in the main server file
export default router;
