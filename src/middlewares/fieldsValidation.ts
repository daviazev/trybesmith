import { Request, Response, NextFunction } from 'express';
import { 
  validateLoginFields, validateProductFields, validateUsersFields,
} from './validations/validations.values';

export const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const validation = validateLoginFields(username, password);

  if (validation.message) return res.status(400).json(validation);

  return next();
};

export const productValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;

  const validation = validateProductFields(name, amount);

  if (validation.message) {
    return validation.message.includes('required') 
      ? res.status(400).json(validation) : res.status(422).json(validation);
  }

  return next();
};

export const userFieldsValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, level, password } = req.body;

  const validation = validateUsersFields({ username, vocation, level, password });

  if (validation.message) {
    return validation.message.includes('required') 
      ? res.status(400).json(validation) : res.status(422).json(validation);
  }

  return next();
};