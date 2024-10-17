import { weightCollection } from "../index.js";
export const getWeight = async (req, res) => {
    const weights = await weightCollection.find({}).toArray();
    res.status(200).json(weights);
};
