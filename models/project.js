const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  technologies: {
    type: [String],
    required: true
  }
});

const Project = mongoose.model("Project", projectSchema);

exports.Project = Project;
