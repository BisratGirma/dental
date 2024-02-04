const { default: mongoose } = require("mongoose");
const Employee = require("../models/employee.model");

exports.createEmployee = (req, res) => {
  res.send("create");
};

exports.getEmployee = async (req, res) => {
  const { id } = req.params;

  if (mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ message: "Employee ID not correct!" });

  const employee = await Employee.findById(id);

  res.status(200).json({
    status: "success",
    data: {
      employee,
    },
  });
};

exports.getAllEmployee = (req, res) => {
  res.send("readAll");
};

exports.updateEmployee = (req, res) => {
  res.send("update");
};

exports.deleteEmployee = (req, res) => {
  res.send("delete");
};
