import express from "express";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelId", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms);

export default router;
