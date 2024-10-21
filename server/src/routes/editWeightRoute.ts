import { Router } from "express";
import { editWeight } from "../controllers/editWeight.js";

const router = Router();

router.put("/weights", editWeight as any);

export default router;
