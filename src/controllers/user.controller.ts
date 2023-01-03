import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import UserService from '../services/user.service';
import User from '../interfaces/user.interface';

dotenv.config();

const secret = process.env.JWT_SECRET;

// const generateToken = (user: User) => {
//     const payload = { id: user.id, username: user.username };
//     return jwt.sign(payload, secret as string, { algorithm: 'HS256', expiresIn: '7d' });
//   };

export default class UserController {
  constructor(private userService = new UserService()) {}

  static generateToken(user: User): string {
    const payload = { id: user.id, username: user.username };
    return jwt.sign(payload, secret as string, { algorithm: 'HS256', expiresIn: '7d' });
  }

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;

    const { username, level, vocation, password } = await this.userService.createUser(user);

    if (!username || !level || !vocation || !password) {
      return res.status(401).json({ message: 'fields are missing' });
    }

    const token = UserController.generateToken(req.body);

    return res.status(201).json({ token });
  };
} 