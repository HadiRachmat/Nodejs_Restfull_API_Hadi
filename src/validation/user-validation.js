import Joi from "joi";

const registerUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
  name: Joi.string().max(100).required(100),
});

const loginUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
});

const updateUserValidatiion =Joi.object({
  name: Joi.string().max(100).optional(),
  password: Joi.string().max(100).optional(),
  username: Joi.string().max(100).required(),
})
const getUserValidation = Joi.string().max(100).required();

export { registerUserValidation, loginUserValidation, getUserValidation, updateUserValidatiion};
