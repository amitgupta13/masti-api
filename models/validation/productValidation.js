const Joi = require("@hapi/joi");

function validateProduct(req) {
  const schema = {
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required()
  };

  return Joi.validate(req, schema, { abortEarly: false });
}

module.exports = {
  validateProduct
};
