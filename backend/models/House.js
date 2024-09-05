// Import Mongoose for MongoDB object modeling
import mongoose from 'mongoose';

// Define the schema for the House model
const houseSchema = new mongoose.Schema({
  // Title of the house
  title: {
    type: String, // Data type is String
    required: true, // This field is required
  },
  // Description of the house
  description: {
    type: String, // Data type is String
    required: true, // This field is required
  },
  // Price of the house
  price: {
    type: Number, // Data type is Number
    required: true, // This field is required
  },
  // Location of the house
  location: {
    type: String, // Data type is String
    required: true, // This field is required
  },
  // Array of image URLs for the house
  images: [String], // Data type is an array of Strings
}, { timestamps: true }); // Add createdAt and updatedAt timestamps

// Create a Mongoose model using the defined schema
const House = mongoose.model('House', houseSchema);

// Export the House model to be used in other parts of the application
export default House;
