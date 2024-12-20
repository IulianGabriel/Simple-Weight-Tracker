import { Request, Response } from "express";
import { weightCollection } from "../index.js";

export const getWeights = async (req: Request, res: Response) => {
  const weights = await weightCollection.find({}).sort({ date: 1 }).toArray();

  res.status(200).json(weights);
};
