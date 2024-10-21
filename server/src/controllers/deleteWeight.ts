import { weightCollection } from "../index.js";
import { Request, Response } from "express";

export const deleteWeight = async (req: Request, res: Response) => {
  const { x } = req.body;

  const result = await weightCollection.deleteOne({
    x: x,
  });
  if (result.deletedCount === 0) {
    return res.status(404).json({ message: "Document not found" });
  }
  return res.status(200).json({ message: "Delete successful" });
};
