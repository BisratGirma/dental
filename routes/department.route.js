const departmentController = require("../controller/department");

module.exports = function departmentRoutes(app) {
  app.post("/api/departments", departmentController.createDepartment);
  app.get("/api/departments/:id", departmentController.getDepartment);
  app.get("/api/departments", departmentController.getAllDepartment);
  app.put("/api/departments/:id", departmentController.updateDepartment);
  app.delete("/api/departments/:id", departmentController.deleteDepartment);
};
