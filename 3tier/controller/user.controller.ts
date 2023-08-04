import { Request, Response, NextFunction } from 'express';
import UserService from '../service/user.service';
import dotenv from 'dotenv';
dotenv.config();

const userService = new UserService();

class UserController {
  userSignup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      interface Signup {
        email: string;
        password: string;
        nickname: string;
        phone: boolean;
      }
      const { email, password, nickname, phone }: Signup = req.body;

      const create = await userService.createUser(email, password, nickname, phone);

      res.status(200).json('회원가입이 완료되었습니다.');
    } catch (error: unknown) {
      console.error('로그인 에러', error);
    }
  };
}

export default UserController;
