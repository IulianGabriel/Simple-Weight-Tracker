import { weightCollection } from "../index.js";
import _ from "lodash";
const { omit } = _;
export const addWeight = async (req, res) => {
    const { id, date, weight } = req.body;
    const newWeight = { id, date, weight };
    await weightCollection.insertOne(newWeight);
    res.status(201).send(omit(newWeight, ["_id"]));
};
