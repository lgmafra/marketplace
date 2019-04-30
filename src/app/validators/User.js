const Joi = require('joi')

module.exports = {
  body: {
    name: Joi.string().required(),
    password: Joi.string()
      .required()
      .min(6),
    email: Joi.string()
      .email()
      .required()
  }
}
