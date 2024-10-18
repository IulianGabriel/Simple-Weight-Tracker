import { Router } from "express";
import { addWeight } from "../controllers/addWeight.js";
const router = Router();
router.post("/add-weight", addWeight);
export default router;
