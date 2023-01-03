import User from '../interfaces/user.interface';
import UserModel from '../models/users.model';
import connection from '../models/connection';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public createUser(user: User): Promise<User> {
    return this.model.createUser(user);
  }
}