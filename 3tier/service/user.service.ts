import UserRepository from '../repository/user.repository';
import { Request, Response, NextFunction } from 'express';
const userRepository = new UserRepository();

class UserService {
  createUser = async (req: Request, res: Response, next: NextFunction) => {};
}

export default UserService;
