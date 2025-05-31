const connectDB = require("./config/database");
const User = require("./models/User.model");
const run = async () => {
  await connectDB();

  const newUser = new User({
    name: "Ayeza Aslam",
    email: "Ayeza@example.com",
    password: "1234567890",
    phone: 1234567890,
  });

  await newUser.save();
  console.log("user saved");
};
run();
