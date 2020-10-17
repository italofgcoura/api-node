//index.js
const Joi = require("joi");

const userSchema = Joi.object({
  nome: Joi.string().min(3).max(30).alphanum().required(),

  cpf: Joi.number().min(11).max(11).integer(),
});

module.exports = {
  userSchema,
};
