import { Router } from "express";
import { getWeights } from "../controllers/weights.js";

const router = Router();

router.get("/weight", getWeights);

export default router;
