import { addWeight } from "../controllers/addWeight.js";
import { Router } from "express";

const router = Router();

router.post("/add-weight", addWeight);

export default router;
