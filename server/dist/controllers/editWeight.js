import { weightCollection } from "../index.js";
import _ from "lodash";
const { omit } = _;
export const editWeight = async (req, res) => {
    const { date, weight } = req.body;
    const { id } = req.params;
    const result = await weightCollection.updateOne({ id: id }, { $set: { date, weight } });
    if (result.matchedCount === 0) {
        return res.status(404).json({ message: "Document not found" });
    }
    const updatedDocument = await weightCollection.findOne({
        id: id,
    });
    return res.status(200).json(omit(updatedDocument, ["_id"]));
};
