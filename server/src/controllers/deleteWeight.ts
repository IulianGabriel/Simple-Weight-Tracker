import { weightCollection } from "../index.js";
import { Request, Response } from "express";
import _ from "lodash";
const { omit } = _;

export const deleteWeight = async (req: Request, res: Response) => {
  const { date } = req.body;

  const documentToDelete = await weightCollection.findOne({ date: date });

  if (!documentToDelete) {
    return res.status(404).json({ message: "Document not found" });
  }

  const result = await weightCollection.deleteOne({
    date: date,
  });
  if (result.deletedCount === 0) {
    return res.status(500).json({ message: "Delete failed" });
  }
  return res.status(200).json(omit(documentToDelete, ["_id"]));
};
