const bodyParser = require("body-parser");
const error = require("../middleware/error");
const authRoutes = require("../routes/auth");
const adminRoutes = require("../routes/admin");
const projectRoutes = require("../routes/projects");
const cors = require("cors");

module.exports = function(app) {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/auth", authRoutes);
  app.use("/admin", adminRoutes);
  app.use("/projects", projectRoutes);
  app.use(error);
};
