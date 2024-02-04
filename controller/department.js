const { default: mongoose } = require("mongoose");
const Department = require("../models/department.model");

exports.createDepartment = (req, res) => {
  res.send("create");
};

exports.getDepartment = async (req, res) => {
  const { id } = req.params;

  if (mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ message: "Department ID not correct!" });

  const department = await Department.findById(id);

  res.status(200).json({
    status: "success",
    data: {
      department,
    },
  });
};

exports.getAllDepartment = (req, res) => {
  res.send("readAll");
};

exports.updateDepartment = (req, res) => {
  res.send("update");
};

exports.deleteDepartment = (req, res) => {
  res.send("delete");
};
