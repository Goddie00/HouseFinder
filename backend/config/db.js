// Import Mongoose for MongoDB object modeling
import mongoose from 'mongoose';

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the connection URI from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Use the new URL string parser
      useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
    });

    // Log a success message with the host of the MongoDB connection
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // Log any errors that occur during the connection attempt
    console.error('MongoDB connection error:', error.message);
    
    // Exit the process with a failure code if there is a connection error
    process.exit(1);
  }
};

// Export the connectDB function to use it in other parts of the application
export default connectDB;
