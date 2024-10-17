import { Router } from "express";
import { getWeight } from "../controllers/weights.js";
const router = Router();
router.get("/weight", getWeight);
export default router;
