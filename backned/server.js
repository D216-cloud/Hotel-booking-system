import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkwebhooks from "./controllers/clerkWebhooks.js";


dotenv.config();

connectDB()

const app = express()
app.use(cors()) // Enable cross-origin requests

//middleware
app.use(express.json())
app.use(clerkMiddleware())

//api listen to clrek webhooks

app.use("/api/clerk/", clerkwebhooks)

app.get('/', (req, res)=> res.send('Hello worlds'))

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))