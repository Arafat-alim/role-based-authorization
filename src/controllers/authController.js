const User = require("../models/User");
const encryptPassword = require("../utils/encryptPassword");
const isPasswordMatched = require("../utils/isPasswordMatched");
const generateJWtToken = require("../utils/generateJWtToken");

exports.handleRegister = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const encryptedPassword = await encryptPassword(password);
    const newUser = new User({
      email,
      password: encryptedPassword,
      role,
    });

    const data = await newUser.save();
    if (!data) {
      throw new Error("Failed to add user");
    }
    return res.status(201).json({
      success: false,
      message: "Register Successfully",
      data: data,
    });
  } catch (err) {
    console.error("Something went wrong while registering: ", err);
    return res.status(500).json({
      success: false,
      message: "failed to register the user",
      errMsg: err.message,
    });
  }
};

exports.handleLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "No user found",
      });
    }
    const isMatch = await isPasswordMatched(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Password does not matched" });
    }
    const token = generateJWtToken(user);
    return res.status(200).json({
      success: true,
      message: "LoggedIn Successfully",
      token,
    });
    console.log("token_", token);
  } catch (err) {
    console.error("Something went wrong while login user: ", err.message);
  }
};
