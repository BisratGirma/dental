exports.createDepartment = (req, res) => {
  res.send("create");
};

exports.getDepartment = (req, res) => {
  return res.send("read");
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
