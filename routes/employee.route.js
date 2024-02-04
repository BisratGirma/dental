const express = require("express");
const router = express.Router();

const employeeController = require("../controller/employee");

module.exports = function employeeRoutes() {
  router.post("/create", employeeController.createEmployee);
  router.get("/:id", employeeController.getEmployee);
  router.get("", employeeController.getAllEmployee);
  router.put("/:id", employeeController.updateEmployee);
  router.delete("/:id", employeeController.deleteEmployee);

  return router;
};
