import Joi from 'joi';

const loginFields = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default loginFields;