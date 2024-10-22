import { Router } from "express";
import { editWeight } from "../controllers/editWeight.js";

const router = Router();

router.put("/edit-weight", editWeight as any);

export default router;
