const { default: mongoose } = require("mongoose");
const Department = require("../models/department.model");

exports.createDepartment = async (req, res) => {
  try {
    const { name } = req.body;

    if (typeof name !== "string")
      return res.status(400).json({ message: "Name is required!" });
    const department = await Department.create({ name, createdAt: new Date() });

    res.status(201).json({
      status: "success",
      data: {
        department,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "please, try again later!" });
  }
};

exports.getDepartment = async (req, res) => {
  try {
    const { id } = req.params;

    if (mongoose.Types.ObjectId.isValid(id) === false)
      return res.status(400).json({ message: "Department ID not correct!" });

    const department = await Department.findById(id);

    res.status(200).json({
      status: "success",
      data: {
        department,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "please, try again later!" });
  }
};

exports.getAllDepartment = async (req, res) => {
  try {
    const department = await Department.find();

    res.status(200).json({
      status: "success",
      data: {
        department,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "please, try again later!" });
  }
};

exports.updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (mongoose.Types.ObjectId.isValid(id) === false)
      return res.status(400).json({ message: "Department ID not correct!" });
    if (typeof name !== "string")
      return res.status(400).json({ message: "Name is required!" });
    const department = await Department.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      data: {
        department,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "please, try again later!" });
  }
};

exports.deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;

    if (mongoose.Types.ObjectId.isValid(id) === false)
      return res.status(400).json({ message: "Department ID not correct!" });

    const result = await Department.findByIdAndDelete(id);

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
