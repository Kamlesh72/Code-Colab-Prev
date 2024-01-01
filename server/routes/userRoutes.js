import { Router } from 'express';
import {
  registerController,
  loginController,
  forgotPasswordController,
  getCurrentUserController,
} from '../controllers/userControllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router
  .get('/', authMiddleware, getCurrentUserController)
  .post('/register', registerController)
  .post('/login', loginController)
  .post('/forgot-password', forgotPasswordController);

export default router;
