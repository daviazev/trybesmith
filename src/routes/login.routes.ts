import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import { loginValidation } from '../middlewares/fieldsValidation';

const router = Router();

const loginController = new LoginController();

router.post('/login', loginValidation, loginController.login);

export default router;