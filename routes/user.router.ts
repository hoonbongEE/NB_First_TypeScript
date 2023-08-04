import express from 'express';
import UserController from '../3tier/controller/user.controller';

const userController = new UserController();

const userRouter = express.Router();

userRouter.post('/signup', userController.userSignup);

export default userRouter;
