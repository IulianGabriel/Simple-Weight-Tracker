import express from "express";
import { MongoClient } from "mongodb";
import { createServer } from "http";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());

const client = await MongoClient.connect(process.env.MONGO_URI as string);
export const db = client.db("Weights");
export const weightsCollection = db.collection("weights");

server.listen(process.env.PORT, () => {
  console.log(`server running on http://localhost:${process.env.PORT}`);
});
