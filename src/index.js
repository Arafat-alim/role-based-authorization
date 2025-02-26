require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

//! Middlewares
app.use(express.json());

//! Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) =>
  res.status(200).json({ success: true, message: "Server is running smoothly" })
);

//! server
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
  await connectDB();
});
