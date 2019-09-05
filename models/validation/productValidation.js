const Joi = require("joi");

function validateProduct(req) {
  const schema = {
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required()
  };

  return Joi.validate(req, schema);
}

module.exports = {
  validateProduct
};
