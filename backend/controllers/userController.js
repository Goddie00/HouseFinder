// Import the User model to interact with the MongoDB collection
import User from '../models/User.js';
// Import bcrypt for password hashing and comparison
import bcrypt from 'bcryptjs';
// Import jsonwebtoken for creating and verifying tokens
import jwt from 'jsonwebtoken';

// Controller function to register a new user
export const registerUser = async (req, res) => {
  // Destructure user details from the request body
  const { name, email, password } = req.body;

  try {
    // Hash the user's password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new User instance with hashed password
    const newUser = new User({ name, email, password: hashedPassword });
    
    // Save the new user to the database
    const savedUser = await newUser.save();
    
    // Send a 201 status code and the saved user as a JSON response
    res.status(201).json(savedUser);
  } catch (error) {
    // Send a 400 status code and the error message if there's an issue with registration
    res.status(400).json({ message: error.message });
  }
};

// Controller function to log in a user
export const loginUser = async (req, res) => {
  // Destructure email and password from the request body
  const { email, password } = req.body;

  try {
    // Find a user with the given email
    const user = await User.findOne({ email });

    // If user exists and password matches, generate a JWT token
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create a JWT token with user ID and secret key, set expiration to 1 hour
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      
      // Send the token as a JSON response
      res.json({ token });
    } else {
      // If credentials are invalid, send a 400 status code with an error message
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    // Send a 500 status code and the error message if there's an issue with login
    res.status(500).json({ message: error.message });
  }
};

// Add more controller functions as needed to handle user-related operations
