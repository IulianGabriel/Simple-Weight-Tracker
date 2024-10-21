import { Router } from "express";
import { deleteWeight } from "../controllers/deleteWeight.js";

const router = Router();

router.delete("/weights", deleteWeight as any);

export default router