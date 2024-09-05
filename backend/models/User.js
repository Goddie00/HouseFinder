// Import Mongoose for MongoDB object modeling
import mongoose from 'mongoose';

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  // Name of the user
  name: {
    type: String, // Data type is String
    required: true, // This field is required
  },
  // Email address of the user
  email: {
    type: String, // Data type is String
    required: true, // This field is required
    unique: true, // Email must be unique across all users
  },
  // Hashed password of the user
  password: {
    type: String, // Data type is String
    required: true, // This field is required
  },
}, { timestamps: true }); // Add createdAt and updatedAt timestamps

// Create a Mongoose model using the defined schema
const User = mongoose.model('User', userSchema);

// Export the User model to be used in other parts of the application
export default User;
