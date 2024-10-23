import { Router } from "express";
import { deleteWeight } from "../controllers/deleteWeight.js";

const router = Router();

router.delete("/deleteWeight", deleteWeight as any);

export default router;
