import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import Order from '../interfaces/order.interface';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders(): Promise<Order[]> {
    const orders = await this.model.getAllOrders();
    return orders;
  }
}