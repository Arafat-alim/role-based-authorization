const bcrypt = require("bcryptjs");

const isPasswordMatched = async (encryptedPassword, userEnteredPassword) => {
  try {
    const decryptedPassword = await bcrypt.compare(
      encryptedPassword,
      userEnteredPassword
    );
    return decryptedPassword;
  } catch (err) {
    console.error("failed to decrypted the password: ", err);
  }
};

module.exports = isPasswordMatched;
