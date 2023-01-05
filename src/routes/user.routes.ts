import { Router } from 'express';
import UserController from '../controllers/user.controller';

import { userFieldsValidation } from '../middlewares/fieldsValidation';

const router = Router();

const userController = new UserController();

router.post('/users', userFieldsValidation, userController.createUser);

export default router;
