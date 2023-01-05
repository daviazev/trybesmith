import { Pool, RowDataPacket } from 'mysql2/promise';
import Login from '../interfaces/login.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login(login: Login): Promise<Login[]> {
    const { username, password } = login;
    const result = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?', 
      [username, password],
    );

    const [rows] = result;
    return rows as Login[];
  }
}