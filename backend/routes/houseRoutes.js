// Import necessary modules and functions
import express from 'express'; // Import Express for routing
import { getHouses, getHouseById, createHouse } from '../controllers/houseController.js'; // Import controller functions

// Create a new router instance
const router = express.Router();

// Route to get all houses
router.get('/', getHouses);
// Route to get a single house by its ID
router.get('/:id', getHouseById);
// Route to create a new house
router.post('/', createHouse);

// Add more routes as needed for additional functionalities (e.g., update, delete)

// Export the router to be used in the main server file
export default router;
