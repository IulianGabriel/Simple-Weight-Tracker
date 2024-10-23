import { weightCollection } from "../index.js";
import { Request, Response } from "express";
import _ from "lodash";
const { omit } = _;

export const addWeight = async (req: Request, res: Response) => {
  const { id, date, weight } = req.body;
  const newWeight = { id, date, weight };
  await weightCollection.insertOne(newWeight);
  res.status(201).send(omit(newWeight, ["_id"]));
};
