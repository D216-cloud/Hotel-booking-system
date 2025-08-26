import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkwebhooks from "./controllers/clerkWebhooks.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'success',
    message: 'API is running',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Welcome to Hotel Booking API',
    status: 'online'
  });
});

// Connect to MongoDB
try {
  await connectDB();
  console.log('✅ MongoDB Connected Successfully');
} catch (error) {
  console.error('❌ MongoDB Connection Error:', error.message);
  process.exit(1);
}

// Clerk webhook endpoint
app.post("/api/clerk/webhook", clerkwebhooks);

// Debug endpoint to check webhook URL
app.get("/api/clerk/webhook", (req, res) => {
  res.json({ 
    message: "Clerk webhook endpoint is active",
    setup: "Add this URL to Clerk Dashboard: /api/clerk/webhook"
  });
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))