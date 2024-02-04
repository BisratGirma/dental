const mongoose = require("mongoose");

require("dotenv").config();

const connection = mongoose.connect(
  process.env.MONGO_URL ?? "mongodb://localhost:27017/employee-management"
);

connection
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
