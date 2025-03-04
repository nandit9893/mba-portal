// index.js

import dotenv from "dotenv";

import express from "express";
import "express-async-errors";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// File imports
import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js"; 
import paymentRoutes from "./routes/paymentRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import applicationRoutes from './routes/applicationRoutes.js';// ✅ Fixed import

// Load environment variables early

dotenv.config();
// Log Mongo URL for debugging (to ensure it's being loaded)
console.log("Mongo URL: ", process.env.MONGO_URL);

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use('/public', express.static('public'));

// Routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/admin", adminRoutes);
app.use('/payment', paymentRoutes);
app.use('/api/resumes', resumeRoutes);
app.use('/api/application', applicationRoutes);

app.get("/", (req, res) => {
    res.send("MBA job portal admin backend is running.");
});

// Error handling middleware
app.use(errorMiddleware);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection failed:', err));

// Server Configuration
const PORT = process.env.PORT || 5001;  // Default to port 5001 if process.env.PORT is undefined
app.listen(PORT, () => {
    console.log(
        `Node Server Running In ${process.env.DEV_MODE} Mode on port ${PORT}`.bgCyan.white
    );
});
