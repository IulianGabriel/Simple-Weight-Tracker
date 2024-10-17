import { Request, Response } from "express";
import { weightCollection } from "../index.js";

export const getWeight = async (req: Request, res: Response) => {
  const weights = await weightCollection.find({}).toArray();
  res.status(200).json(weights);
};
