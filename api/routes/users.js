import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
router.get("/verifyToken", verifyToken, (req, res, next) => {
  res.send("successfully logged in!");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user, you are logged in and you can delete your account");
});

//admin route
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, enjoy the superpower");
});
//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);

export default router;
