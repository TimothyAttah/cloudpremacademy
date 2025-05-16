import express from 'express';
import authControllers from '../controllers/authControllers.js';

const authRouter = express.Router();

authRouter.post('/register', authControllers.signUp);

authRouter.post('/sign-in', authControllers.signIn);

export default authRouter;
