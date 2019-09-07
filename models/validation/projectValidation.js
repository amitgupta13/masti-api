const Joi = require("@hapi/joi");

function validateProject(req) {
  const schema = {
    name: Joi.string().required(),
    description: Joi.string().required(),
    url: Joi.string(),
    technologies: Joi.array().required()
  };

  return Joi.validate(req, schema, { abortEarly: false });
}

module.exports = {
  validateProject
};
