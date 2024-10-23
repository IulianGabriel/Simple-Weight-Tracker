import { Router } from "express";
import { updateWeight } from "../controllers/updateWeight.js";
const router = Router();
router.put("/editWeight/:id", updateWeight);
export default router;
