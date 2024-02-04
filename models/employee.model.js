const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  fullName: { type: String, required: true },
  department: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Department",
  },
  createdAt: { type: Date },
});

module.exports = mongoose.model("Employee", EmployeeSchema, "employees");
