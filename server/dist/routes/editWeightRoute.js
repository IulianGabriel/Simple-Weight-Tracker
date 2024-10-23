import { Router } from "express";
import { editWeight } from "../controllers/editWeight.js";
const router = Router();
router.put("/editWeight/:id", editWeight);
export default router;
