import connection from '../models/connection';
import LoginModel from '../models/login.model';
import Login from '../interfaces/login.interface';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(login: Login): Promise<Login[]> {
    const result = await this.model.login(login);
    return result;
  }
}