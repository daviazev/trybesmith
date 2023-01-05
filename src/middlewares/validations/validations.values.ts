import loginFields from './schema';

const validateLoginFields = (username: string, password: string) => {
  const { error } = loginFields.validate({ username, password });

  console.log(error);

  if (error) return { message: error.message };

  return { message: null };
};

export default validateLoginFields;