const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

require("./database/mongodb");

const routes = require("./routes");

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  req.setTimeout(5000);
  next();
});

app.use((err, req, res, next) => {
  if (err.code === "ETIMEDOUT") {
    return res.status(504).send("Gateway Timeout");
  }
  next();
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Content-Type, access-control-allow-origin, x-api-applicationid, authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "OPITIONS, GET, PUT, PATCH, POST, DELETE"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
