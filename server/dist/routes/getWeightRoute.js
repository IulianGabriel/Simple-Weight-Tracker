import { Router } from "express";
import { getWeight } from "../controllers/getWeight.js";
const router = Router();
router.get("/getWeight/:id", getWeight);
export default router;
