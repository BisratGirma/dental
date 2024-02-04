const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost/employee-management");

connection
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
