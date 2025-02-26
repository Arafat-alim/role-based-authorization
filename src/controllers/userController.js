const handleAdmin = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Welcome Admin",
    });
  } catch (err) {
    console.error("something went wrong while handling Admin", err);
    return res.status(500).json({
      success: false,
      message: "Failed to navigate",
      errMsg: err.message,
    });
  }
};
const handleManager = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Welcome Manager",
    });
  } catch (err) {
    console.error("something went wrong while handling Admin", err);
    return res.status(500).json({
      success: false,
      message: "Failed to navigate",
      errMsg: err.message,
    });
  }
};
const handleUser = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Welcome User",
    });
  } catch (err) {
    console.error("something went wrong while handling Admin", err);
    return res.status(500).json({
      success: false,
      message: "Failed to navigate",
      errMsg: err.message,
    });
  }
};

module.exports = {
  handleAdmin,
  handleManager,
  handleUser,
};
