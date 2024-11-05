import express from "express";
import { verifyToken } from "../utils/utils.js";
import {
  addItems,
  getItems,
  getItem,
  deleteItem,
  updateItem,
} from "../controllers/items.js";

const router = express.Router();

router.get("/items", getItems);
router.post("/add-item", verifyToken, addItems);
router.get("/item/:id", getItem);
router.put("/item/:id", verifyToken, updateItem);
router.delete("/item/:id", verifyToken, deleteItem);

export default router;
