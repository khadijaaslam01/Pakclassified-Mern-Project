const express = require("express");
const dotenv = require("dotenv");
const User = require("./models/User.model");
dotenv.config();

const connectDB = require("./config/database");

connectDB();

const app = express();
app.use(express.json());

app.get("/user", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Web server is ready on http://localhost:${port}`);
});
