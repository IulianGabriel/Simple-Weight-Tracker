import express from "express";
import { createServer } from "http";
import cors from "cors";
import weightRoutes from "./routes/weightRoutes.js";
import addWeightRoutes from "./routes/addWeightRoute.js";
import editWeightRoutes from "./routes/editWeightRoute.js";
import deleteWeightRoutes from "./routes/deleteWeightRoute.js";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();

const app = express();
const server = createServer(app);
const port = process.env.PORT || 5000;
const url = process.env.MONGO_URI;

const client = await MongoClient.connect(url as string);
const db = client.db("Weights");
export const weightCollection = db.collection("Weights");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(weightRoutes);
app.use(addWeightRoutes);
app.use(editWeightRoutes);
app.use(deleteWeightRoutes);

server.listen(process.env.PORT, () => {
  console.log(`server running on http://localhost:${port}`);
});
