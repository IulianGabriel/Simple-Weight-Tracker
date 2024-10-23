import { Router } from "express";
import { addWeight } from "../controllers/addWeight.js";
const router = Router();
router.post("/addWeight", addWeight);
export default router;
