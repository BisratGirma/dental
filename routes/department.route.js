const express = require("express");
const router = express.Router();

const departmentController = require("../controller/department");

router.post("/", departmentController.createDepartment);
router.get("/:id", departmentController.getDepartment);
router.get("", departmentController.getAllDepartment);
router.put("/:id", departmentController.updateDepartment);
router.delete("/:id", departmentController.deleteDepartment);

module.exports = router;
