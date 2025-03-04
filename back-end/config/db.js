// config/db.js
import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  console.log("Mongo URL: ", process.env.MONGO_URL); // Log the Mongo URL for debugging
  
  try {
    // Connect to MongoDB using the URI from the environment variable
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected to MongoDB: ${mongoose.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.error(`MongoDB Error: ${error}`.bgRed.white);
    process.exit(1); // Exit if there’s a connection error
  }
};

export default connectDB;

