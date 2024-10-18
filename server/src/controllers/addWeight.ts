import { weightCollection } from "../index.js";
import { Request, Response } from "express";

export const addWeight = async (req: Request, res: Response) => {
  let newWeight = req.body;
  let result = await weightCollection.insertOne(newWeight);
  res.send(result).status(204);
};
