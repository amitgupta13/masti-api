const { Project } = require("../models/project");

async function addProject(req, res) {
  const project = new Project({
    userId: req.user._id,
    name: req.body.name,
    description: req.body.description,
    url: req.body.url,
    technologies: req.body.technologies
  });

  await project.save();

  res.status(200).send(project);
}

async function editProject(req, res) {
  let project = await Project.find(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      url: req.body.url,
      technologies: req.body.technologies
    },
    { new: true }
  );

  if (!project)
    return res.status(404).send("The project with given id was not found");

  res.status(200).send(project);
}

async function deleteProject(req, res) {
  const project = await Project.findByIdAndRemove(req.params.id);
  if (!project)
    return res.status(404).send("The project with given id was not found");
  res.status(200).send(project);
}

async function getProjectDetails(req, res) {
  const project = await Project.findById(req.params.id);
  if (!project)
    return res.status(404).send("The project with given id was not found");
  res.status(200).send(project);
}

async function getProjectList(req, res) {
  const projects = await Project.find({ userId: req.user._id });
  if (!projects.length)
    return res.status(404).send("No projects for given user");
  res.status(200).send(projects);
}

module.exports = {
  addProject,
  editProject,
  deleteProject,
  getProjectDetails,
  getProjectList
};
