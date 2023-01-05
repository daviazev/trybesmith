import { loginFields, productFields, userFields } from './schema';
import User from '../../interfaces/user.interface';

export const validateLoginFields = (username: string, password: string) => {
  const { error } = loginFields.validate({ username, password });

  console.log(error);

  if (error) return { message: error.message };

  return { message: null };
};

export const validateProductFields = (name: string, amount: string) => {
  const { error } = productFields.validate({ name, amount });

  if (error) return { message: error.message };

  return { message: null };
};

export const validateUsersFields = (user: User) => {
  const { username, vocation, level, password } = user;
  const { error } = userFields.validate({ username, vocation, level, password });

  if (error) return { message: error.message };

  return { message: null };
};