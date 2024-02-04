const express = require("express");
const router = express.Router();

const departmentController = require("../controller/department");

module.exports = function departmentRoutes() {
  router.post("/create", departmentController.createDepartment);
  router.get("/:id", departmentController.getDepartment);
  router.get("", departmentController.getAllDepartment);
  router.put("/:id", departmentController.updateDepartment);
  router.delete("/:id", departmentController.deleteDepartment);

  return router;
};
