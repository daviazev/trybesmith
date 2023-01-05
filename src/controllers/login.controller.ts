import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import LoginService from '../services/login.service';
import Login from '../interfaces/login.interface';

const secret = 'secret';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  static generateToken({ username, password }: Login): string {
    const payload = { username, password };
    return jwt.sign(payload, secret as string, { algorithm: 'HS256', expiresIn: '7d' });
  }

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const [result] = await this.loginService.login({ username, password });

    if (!result) return res.status(401).json({ message: 'Username or password invalid' });

    const token = LoginController.generateToken({ username, password });

    return res.status(200).json({ token });
  };
}