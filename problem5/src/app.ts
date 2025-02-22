import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import resourceRoutes from "./routes/resource.routes";
import { connectDB } from "./config/db";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect Database
connectDB();

// Routes
app.use("/api/resources", resourceRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
