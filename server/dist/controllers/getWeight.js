import { weightCollection } from "../index.js";
export const getWeight = async (req, res) => {
    const { id } = req.params;
    const weight = await weightCollection.findOne({ id });
    if (!weight) {
        return res.status(404).json({ message: "Weight not found" });
    }
    return res.status(200).json(weight);
};
