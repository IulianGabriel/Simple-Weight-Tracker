import { weightsCollection } from "../src/index2.js";
export const getWeights = async () => {
    const weights = await weightsCollection.find();
    return weights;
};
