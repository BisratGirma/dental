const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
  name: { type: String, required: true },
  createdAt: { type: Date },
});

module.exports = mongoose.model("Department", DepartmentSchema, "departments");
