const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, trim: true, select: false },
    role: { type: String, enum: ["user", "manager", "admin"] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
