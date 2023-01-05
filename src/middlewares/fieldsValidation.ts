import { Request, Response, NextFunction } from 'express';
import validateLoginFields from './validations/validations.values';

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const validation = validateLoginFields(username, password);

  console.log('>>>>>>>>>>>>>', validation);

  if (validation.message) return res.status(400).json(validation);

  return next();
};

export default loginValidation;