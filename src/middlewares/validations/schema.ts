import Joi from 'joi';

export const loginFields = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const productFields = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export const userFields = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});