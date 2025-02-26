const express = require("express");
const {
  handleAdmin,
  handleManager,
  handleUser,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const authorizeRole = require("../middlewares/roleMiddleware");

const userRouter = express.Router();

userRouter.get("/admin", authMiddleware, authorizeRole("admin"), handleAdmin);
userRouter.get(
  "/manager",
  authMiddleware,
  authorizeRole("admin", "manager"),
  handleManager
);
userRouter.get(
  "/user",
  authMiddleware,
  authorizeRole("admin", "manager", "user"),
  handleUser
);

module.exports = userRouter;
