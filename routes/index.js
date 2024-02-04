const DepartmentRoutes = require("./department.route");
const EmployeeRoutes = require("./employee.route");

module.exports = function departmentRoutes(app) {
  app.use("/api/departments", DepartmentRoutes);

  app.use("/api/employee", EmployeeRoutes);
};
