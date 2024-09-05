// Import the House model to interact with the MongoDB collection
import House from '../models/House.js';

// Controller function to get all houses
export const getHouses = async (req, res) => {
  try {
    // Fetch all houses from the database
    const houses = await House.find();
    
    // Send the list of houses as a JSON response
    res.json(houses);
  } catch (error) {
    // Send a 500 status code and the error message if there's an error
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a specific house by its ID
export const getHouseById = async (req, res) => {
  try {
    // Fetch the house with the given ID from the database
    const house = await House.findById(req.params.id);

    // If the house is found, send it as a JSON response
    if (house) {
      res.json(house);
    } else {
      // If the house is not found, send a 404 status code with a not found message
      res.status(404).json({ message: 'House not found' });
    }
  } catch (error) {
    // Send a 500 status code and the error message if there's an error
    res.status(500).json({ message: error.message });
  }
};

// Controller function to create a new house
export const createHouse = async (req, res) => {
  // Destructure house properties from the request body
  const { title, description, price, location, images } = req.body;

  try {
    // Create a new House instance with the provided properties
    const newHouse = new House({ title, description, price, location, images });
    
    // Save the new house to the database
    const savedHouse = await newHouse.save();
    
    // Send a 201 status code and the saved house as a JSON response
    res.status(201).json(savedHouse);
  } catch (error) {
    // Send a 400 status code and the error message if there's a validation or other error
    res.status(400).json({ message: error.message });
  }
};

// Add more controller functions as needed to handle other operations
