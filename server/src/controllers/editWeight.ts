import { Request, Response } from "express";
import { weightCollection } from "../index.js";
import _ from "lodash";
const { omit } = _;

export const editWeight = async (req: Request, res: Response) => {
  const { date, weight } = req.body;

  const result = await weightCollection.updateOne(
    { date: date },
    { $set: { date, weight } }
  );

  if (result.matchedCount === 0) {
    return res.status(404).json({ message: "Document not found" });
  }

  const updatedDocument = await weightCollection.findOne({ date: date });

  return res.status(200).json(omit(updatedDocument, ["_id"]));
};
