import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAllOrders = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAllOrders();

    return res.status(200).json(orders);
  };
}