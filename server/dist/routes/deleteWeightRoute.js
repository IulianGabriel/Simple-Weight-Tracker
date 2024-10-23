import { Router } from "express";
import { deleteWeight } from "../controllers/deleteWeight.js";
const router = Router();
router.delete("/deleteWeight/:id", deleteWeight);
export default router;
