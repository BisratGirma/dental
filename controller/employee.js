const { default: mongoose } = require("mongoose");
const Employee = require("../models/employee.model");
const Department = require("../models/department.model");

exports.createEmployee = async (req, res) => {
  try {
    const { name, departmentID } = req.body;

    if (typeof name !== "string")
      return res.status(400).json({ message: "Name is required!" });
    if (mongoose.Types.ObjectId.isValid(departmentID) !== true)
      return res.status(400).json({ message: "department ID is not correct!" });

    const department = await Department.findById(departmentID);

    const employee = await Employee.create({ name, createdAt: new Date() });

    res.status(201).json({
      status: "success",
      data: {
        employee,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "please, try again later!" });
  }
};

exports.getEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    if (mongoose.Types.ObjectId.isValid(id) === false)
      return res.status(400).json({ message: "Employee ID not correct!" });

    const employee = await Employee.findById(id);

    res.status(200).json({
      status: "success",
      data: {
        employee,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "please, try again later!" });
  }
};

exports.getAllEmployee = async (req, res) => {
  try {
    const employee = await Employee.find();

    res.status(200).json({
      status: "success",
      data: {
        employee,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "please, try again later!" });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (mongoose.Types.ObjectId.isValid(id) === false)
      return res.status(400).json({ message: "Employee ID not correct!" });
    if (typeof name !== "string")
      return res.status(400).json({ message: "Name is required!" });
    const employee = await Employee.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      data: {
        employee,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "please, try again later!" });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    if (mongoose.Types.ObjectId.isValid(id) === false)
      return res.status(400).json({ message: "Employee ID not correct!" });

    const result = await Employee.findByIdAndDelete(id);

    res.status(200).json({
      status: "success",
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "please, try again later!" });
  }
};
