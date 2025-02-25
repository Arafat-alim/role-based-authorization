const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB connected to Host: ${connect.connection.host} and Database Name: ${connect.connection.name} `
    );
  } catch (err) {
    console.error("Error to connect to DB", err);
    process.exit(1);
  }
};

module.exports = connectDB;
