const Joi = require("joi");

function validateProject(req) {
  const schema = {
    name: Joi.string().required(),
    description: Joi.string().required(),
    url: Joi.string(),
    technologies: Joi.array().required()
  };

  return Joi.validate(req, schema);
}

module.exports = {
  validateProject
};
