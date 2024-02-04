const DepartmentRoutes = require("./department.route");

module.exports = function departmentRoutes(app) {
  app.use("/api/departments", DepartmentRoutes);
};
