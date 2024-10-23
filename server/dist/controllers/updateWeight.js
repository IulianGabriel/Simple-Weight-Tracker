import { weightCollection } from "../index.js";
import _ from "lodash";
const { omit } = _;
export const updateWeight = async (req, res) => {
    const { date, weight } = req.body;
    const { id } = req.params;
    const result = await weightCollection.updateOne({ id }, { $set: { date, weight } });
    if (result.matchedCount === 0) {
        return res.status(404).json({ message: "Document not found" });
    }
    const updatedDocument = await weightCollection.findOne({
        id,
    });
    return res.status(200).json(omit(updatedDocument, ["_id"]));
};
