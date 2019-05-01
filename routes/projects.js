const express = require('express');
const router = express.Router();
const projects = require('../controllers/projects');
const validate = require('../middleware/validate');
const projectValidation = require('../models/validation/projectValidation');
const auth = require('../middleware/auth');

router.get('/', auth, projects.getProjectList);
router.get('/:id', auth, projects.getProjectDetails);
router.post('/', [auth, validate(projectValidation.validateProject)], projects.addProject);
router.put('/:id', [auth, validate(projectValidation.validateProject)], projects.editProject);
router.delete('/:id', auth, projects.deleteProject);

module.exports = router;