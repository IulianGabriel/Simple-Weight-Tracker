import { weightCollection } from "../index.js";
export const addWeight = async (req, res) => {
    let newWeight = req.body;
    let result = await weightCollection.insertOne(newWeight);
    res.send(result).status(204);
};
