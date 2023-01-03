import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

const allOrdersQuery = `SELECT O.id, O.user_id AS userId, JSON_ARRAYAGG(P.id) AS productsIds
FROM Trybesmith.orders AS O INNER JOIN Trybesmith.products 
AS P ON O.id = P.order_id GROUP BY P.order_id;`;

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Order[]> {
    const result = await this.connection.execute(allOrdersQuery);
    const [rows] = result;
    return rows as Order[];
  }
} 