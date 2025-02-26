const Jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    // Check if JWT_SECRET is defined
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    let token;
    const authHeader = req.headers.Authorization || req.headers.authorization;

    // Check if the Authorization header is present and starts with "Bearer"
    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
    }

    // Check if token is present
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided, authorization denied",
      });
    }

    // Verify the token
    const decode = Jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user information to the request object
    req.user = decode;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // Handle specific JWT errors
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token has expired",
      });
    } else if (err.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    } else if (
      err.message === "JWT_SECRET is not defined in environment variables"
    ) {
      return res.status(500).json({
        success: false,
        message: "Server configuration error",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Authentication failed",
        errMsg: err.message,
      });
    }
  }
};

module.exports = authMiddleware;
