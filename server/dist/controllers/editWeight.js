import { weightCollection } from "../index.js";
export const editWeight = async (req, res) => {
    const { x, y } = req.body;
    const result = await weightCollection.updateOne({
        x: x,
    }, {
        $set: { x, y },
    });
    if (result.matchedCount === 0) {
        return res.status(404).json({ message: "Document not found" });
    }
    return res.status(200).json({ message: "Update successful" });
};
