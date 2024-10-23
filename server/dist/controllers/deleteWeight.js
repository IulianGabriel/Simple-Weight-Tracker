import { weightCollection } from "../index.js";
import _ from "lodash";
const { omit } = _;
export const deleteWeight = async (req, res) => {
    const { id } = req.params;
    const documentToDelete = await weightCollection.findOne({
        id,
    });
    if (!documentToDelete) {
        return res.status(404).json({ message: "Document not found" });
    }
    const result = await weightCollection.deleteOne({
        id,
    });
    if (result.deletedCount === 0) {
        return res.status(500).json({ message: "Delete failed" });
    }
    return res.status(200).json(omit(documentToDelete, ["_id"]));
};
