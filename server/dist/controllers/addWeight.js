import { weightCollection } from "../index.js";
export const addWeight = async (req, res) => {
    const { x, y } = req.body;
    if (typeof x !== "string" || typeof y !== "number") {
        return res.status(400).send({ error: "Invalid input" });
    }
    const newWeight = { x, y };
    let result = await weightCollection.insertOne(newWeight);
    res.status(201).send(result);
};
