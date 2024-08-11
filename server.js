import app from "./app.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config(); // Make sure to call this before anything else

// Check if PORT is defined
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});
