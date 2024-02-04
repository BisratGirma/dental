const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb://mongo:27017/employee-management"
);

connection
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
