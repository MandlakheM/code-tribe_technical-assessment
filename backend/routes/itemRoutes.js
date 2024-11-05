import express from "express";
import { verifyToken } from "../utils/authUtils.js";


const router = express.Router();

router.get("/items");
router.post("/add-item");
router.get("/item/:id");
router.put("/item/:id");
router.delete("/item/:id");

export default router;
