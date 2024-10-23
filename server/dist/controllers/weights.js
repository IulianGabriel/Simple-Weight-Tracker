import { weightCollection } from "../index.js";
export const getWeights = async (req, res) => {
    const weights = await weightCollection.find({}).sort({ date: 1 }).toArray();
    res.status(200).json(weights);
};
