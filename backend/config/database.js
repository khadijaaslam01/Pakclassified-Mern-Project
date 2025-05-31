const mongoose = require("mongoose");
require("dotenv").config();

console.log("Loaded MONGO_URL:", process.env.MONGO_URL);

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo DB Connected");
  } catch (err) {
    console.log("Error", err.message);
  }
};

module.exports = connectDB;
