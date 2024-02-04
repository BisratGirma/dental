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

    if (department == null)
      return res.status(400).json({ message: "department not found!" });

    const employee = await Employee.create({
      fullName: name,
      department: department._id,
      createdAt: new Date(),
    });

    res.status(201).json({
      status: "success",
      data: {
        employee,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "please, try again later!" });
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
    res.status(500).json({ message: "please, try again later!" });
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
    res.status(500).json({ message: "please, try again later!" });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, departmentID } = req.body;

    if (mongoose.Types.ObjectId.isValid(id) === false)
      return res.status(400).json({ message: "Employee ID not correct!" });

    const employeeValidationPromise = () =>
      new Promise(async (resolve, reject) => {
        if (
          departmentID != null &&
          mongoose.Types.ObjectId.isValid(departmentID)
        ) {
          const department = await Department.findById(departmentID);

          if (department == null) {
            reject({ message: "department not found!" });
          }
          resolve(department);
        } else {
          resolve(null);
        }
      });

    employeeValidationPromise()
      .then((department) => {
        (async () => {
          const updates = {};

          if (typeof name === "string") updates.fullName = name;
          if (department) updates.department = department._id;

          console.log("department: ", department);

          console.log(" updates: ", updates);

          if (Object.keys(updates).length === 0)
            return res.status(400).json({ message: "No updates!" });

          const employee = await Employee.findByIdAndUpdate(id, updates, {
            new: true,
          });

          res.status(200).json({
            status: "success",
            data: {
              employee,
            },
          });
        })();
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
        return;
      });
  } catch (error) {
    res.status(500).json({ message: "please, try again later!" });
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
    res.status(500).json({ message: "please, try again later!" });
  }
};
