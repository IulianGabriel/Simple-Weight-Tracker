import { weightCollection } from "../index.js";
export const deleteWeight = async (req, res) => {
    const { x } = req.body;
    const result = await weightCollection.deleteOne({
        x: x,
    });
    if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Document not found" });
    }
    return res.status(200).json({ message: "Delete successful" });
};
