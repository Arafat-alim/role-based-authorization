const Jwt = require("jsonwebtoken");

const generateJWtToken = (user) => {
  const token = Jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return token;
};

module.exports = generateJWtToken;
