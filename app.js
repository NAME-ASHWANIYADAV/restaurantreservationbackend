import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();

// Load environment variables from .env file
dotenv.config({ path: "./config.env" }); // If you use .env, change this to dotenv.config();

// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:5173"], // Allow requests from this frontend URL
    methods: ["POST"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials like cookies to be sent with requests
  })
);


// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

// Connect to the database
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;

