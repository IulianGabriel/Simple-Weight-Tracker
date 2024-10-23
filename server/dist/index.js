import express from "express";
import { createServer } from "http";
import cors from "cors";
import addWeightRoutes from "./routes/addWeightRoute.js";
import deleteWeightRoutes from "./routes/deleteWeightRoute.js";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import updateWeightRoutes from "./routes/updateWeightRoute.js";
import weightRoutes from "./routes/weightRoutes.js";
// import getWeightRoute from "./routes/getWeightRoute.js";
dotenv.config();
const app = express();
const server = createServer(app);
const client = await MongoClient.connect(process.env.MONGO_URI);
const db = client.db("Weights");
export const weightCollection = db.collection("Weights");
// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use(weightRoutes);
app.use(addWeightRoutes);
app.use(updateWeightRoutes);
app.use(deleteWeightRoutes);
// app.use(getWeightRoute);
server.listen(process.env.PORT, () => {
    console.log(`server running on http://localhost:${process.env.PORT || 5000}`);
});
