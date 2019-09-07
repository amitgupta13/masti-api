const Joi = require("@hapi/joi");

function validateSignup(req) {
  const schema = {
    name: Joi.string().required(),
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(1024)
      .required(),
    phone: Joi.string(),
    image: Joi.string()
  };

  return Joi.validate(req, schema, { abortEarly: false });
}

function validateSignin(req) {
  const schema = {
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(1024)
      .required()
  };

  return Joi.validate(req, schema, { abortEarly: false });
}

module.exports = {
  validateSignup,
  validateSignin
};
