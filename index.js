const express = require("express");
const winston = require("winston");
const app = express();

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/validation")();

const port = process.env.PORT || 3000;

app.listen(3000, () => {
  winston.info(`Server started on port ${port}`);
});
