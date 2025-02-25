const bcrypt = require("bcryptjs");

const encryptPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const encrypted = await bcrypt.hash(password, salt);
    return encrypted;
  } catch (err) {
    console.error("failed to encrypt the password: ", password);
  }
};

module.exports = encryptPassword;
