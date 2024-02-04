const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const routes = require("./routes");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
