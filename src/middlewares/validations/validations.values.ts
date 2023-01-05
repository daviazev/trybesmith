import { loginFields, productFields } from './schema';

export const validateLoginFields = (username: string, password: string) => {
  const { error } = loginFields.validate({ username, password });

  console.log(error);

  if (error) return { message: error.message };

  return { message: null };
};

export const validateProductFields = (name: string, amount: string) => {
  const { error } = productFields.validate({ name, amount });

  console.log(error);

  if (error) return { message: error.message };

  return { message: null };
};