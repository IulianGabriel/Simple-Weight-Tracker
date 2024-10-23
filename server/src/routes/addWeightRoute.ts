import { Router } from "express";
import { addWeight } from "../controllers/addWeight.js";

const router = Router();

router.post("/addWeight", addWeight as any);

export default router;
