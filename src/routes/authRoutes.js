const express = require("express");
const {
  handleLogin,
  handleRegister,
} = require("../controllers/authController");
const authRouter = express.Router();

authRouter.post("/register", handleRegister);
authRouter.post("/login", handleLogin);

module.exports = authRouter;
